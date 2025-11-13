// export-utils.js
// PDF, HTML, Markdown 내보내기 유틸리티

// HTML을 Markdown으로 변환
function htmlToMarkdown(html) {
    let markdown = html;
    
    // 스타일 태그 제거
    markdown = markdown.replace(/<style[\s\S]*?<\/style>/gi, '');
    
    // 헤더 변환
    markdown = markdown.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n');
    markdown = markdown.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n');
    markdown = markdown.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n');
    markdown = markdown.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n');
    
    // 볼드 및 강조
    markdown = markdown.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**');
    markdown = markdown.replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**');
    markdown = markdown.replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*');
    markdown = markdown.replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*');
    
    // 리스트 변환
    markdown = markdown.replace(/<ul[^>]*>/gi, '\n');
    markdown = markdown.replace(/<\/ul>/gi, '\n');
    markdown = markdown.replace(/<ol[^>]*>/gi, '\n');
    markdown = markdown.replace(/<\/ol>/gi, '\n');
    markdown = markdown.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n');
    
    // 테이블 변환 (간단한 버전)
    markdown = markdown.replace(/<table[^>]*>/gi, '\n');
    markdown = markdown.replace(/<\/table>/gi, '\n');
    markdown = markdown.replace(/<thead[^>]*>/gi, '');
    markdown = markdown.replace(/<\/thead>/gi, '');
    markdown = markdown.replace(/<tbody[^>]*>/gi, '');
    markdown = markdown.replace(/<\/tbody>/gi, '');
    markdown = markdown.replace(/<tr[^>]*>/gi, '');
    markdown = markdown.replace(/<\/tr>/gi, '\n');
    markdown = markdown.replace(/<th[^>]*>(.*?)<\/th>/gi, '| $1 ');
    markdown = markdown.replace(/<td[^>]*>(.*?)<\/td>/gi, '| $1 ');
    
    // Blockquote
    markdown = markdown.replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gi, '\n> $1\n');
    
    // 단락
    markdown = markdown.replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n');
    markdown = markdown.replace(/<div[^>]*>(.*?)<\/div>/gi, '$1\n');
    markdown = markdown.replace(/<section[^>]*>(.*?)<\/section>/gi, '$1\n\n---\n\n');
    
    // 줄바꿈
    markdown = markdown.replace(/<br\s*\/?>/gi, '\n');
    
    // HTML 태그 제거
    markdown = markdown.replace(/<[^>]+>/g, '');
    
    // HTML 엔티티 디코딩
    markdown = markdown.replace(/&lt;/g, '<');
    markdown = markdown.replace(/&gt;/g, '>');
    markdown = markdown.replace(/&amp;/g, '&');
    markdown = markdown.replace(/&quot;/g, '"');
    markdown = markdown.replace(/&#39;/g, "'");
    markdown = markdown.replace(/&nbsp;/g, ' ');
    
    // 여러 줄바꿈을 2개로 제한
    markdown = markdown.replace(/\n{3,}/g, '\n\n');
    
    // 앞뒤 공백 제거
    markdown = markdown.trim();
    
    return markdown;
}

// PDF로 내보내기 (html2pdf.js 사용)
async function exportToPDF(htmlContent, metadata) {
    try {
        // html2pdf.js CDN 로드 확인
        if (typeof html2pdf === 'undefined') {
            // 동적으로 스크립트 로드
            await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js');
        }
        
        // 완전한 HTML 문서 생성
        const fullHTML = `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>수능 문항 분석 보고서</title>
    ${AnalysisTemplate.getInlineStyles()}
</head>
<body>
    <div style="text-align: center; padding: 20px; border-bottom: 2px solid #3498db; margin-bottom: 30px;">
        <h1 style="margin: 0; color: #3498db;">📊 수능 문항 분석 보고서</h1>
        <p style="margin: 10px 0 0 0; color: #7f8c8d;">생성일: ${new Date().toLocaleDateString('ko-KR')}</p>
        ${metadata.source ? `<p style="margin: 5px 0 0 0; color: #7f8c8d;">출처: ${metadata.source}</p>` : ''}
    </div>
    ${htmlContent}
    <div style="margin-top: 50px; padding-top: 20px; border-top: 2px solid #e9ecef; text-align: center; color: #7f8c8d; font-size: 0.9rem;">
        <p>이원목적분류표 기반 문항 분석 시스템</p>
        <p>© 2025 KICE-Alpha AI Analysis Engine</p>
    </div>
</body>
</html>
        `;
        
        // PDF 옵션 설정
        const opt = {
            margin: [15, 15, 15, 15],
            filename: `수능문항분석_${metadata.source || new Date().getTime()}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2,
                useCORS: true,
                letterRendering: true
            },
            jsPDF: { 
                unit: 'mm', 
                format: 'a4', 
                orientation: 'portrait',
                compress: true
            },
            pagebreak: { 
                mode: ['avoid-all', 'css', 'legacy'],
                before: 'section'
            }
        };
        
        // PDF 생성 및 다운로드
        const element = document.createElement('div');
        element.innerHTML = fullHTML;
        
        await html2pdf().set(opt).from(element).save();
        
        showAlert('PDF 다운로드가 완료되었습니다!', 'success');
        
    } catch (error) {
        console.error('PDF export error:', error);
        showAlert(`PDF 내보내기 실패: ${error.message}`, 'danger');
    }
}

// HTML로 내보내기
function exportToHTML(htmlContent, metadata) {
    try {
        // 완전한 HTML 문서 생성
        const fullHTML = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>수능 문항 분석 보고서 - ${metadata.source || '분석결과'}</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    ${AnalysisTemplate.getInlineStyles()}
    <style>
        body {
            background: #f5f7fa;
            padding: 20px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            padding: 30px 0;
            border-bottom: 3px solid #3498db;
            margin-bottom: 40px;
        }
        .header h1 {
            margin: 0;
            color: #3498db;
            border: none;
            padding: 0;
        }
        .meta {
            color: #7f8c8d;
            margin-top: 10px;
            font-size: 0.95rem;
        }
        .footer {
            margin-top: 60px;
            padding-top: 30px;
            border-top: 2px solid #e9ecef;
            text-align: center;
            color: #7f8c8d;
            font-size: 0.9rem;
        }
        @media print {
            body {
                background: white;
                padding: 0;
            }
            .container {
                box-shadow: none;
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📊 수능 문항 분석 보고서</h1>
            <div class="meta">
                <p>생성일: ${new Date().toLocaleDateString('ko-KR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    weekday: 'long'
                })}</p>
                ${metadata.source ? `<p>출처: <strong>${metadata.source}</strong></p>` : ''}
            </div>
        </div>
        
        ${htmlContent}
        
        <div class="footer">
            <p><strong>이원목적분류표 기반 문항 분석 시스템</strong></p>
            <p>© 2025 KICE-Alpha AI Analysis Engine</p>
            <p style="margin-top: 10px; font-size: 0.85rem;">
                본 분석은 교육평가 이론과 인공지능 기술을 결합하여 생성되었습니다.
            </p>
        </div>
    </div>
</body>
</html>`;
        
        // Blob 생성 및 다운로드
        const blob = new Blob([fullHTML], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `수능문항분석_${metadata.source || new Date().getTime()}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showAlert('HTML 파일이 다운로드되었습니다!', 'success');
        
    } catch (error) {
        console.error('HTML export error:', error);
        showAlert(`HTML 내보내기 실패: ${error.message}`, 'danger');
    }
}

// Markdown으로 내보내기
function exportToMarkdown(htmlContent, metadata) {
    try {
        // HTML을 Markdown으로 변환
        let markdown = htmlToMarkdown(htmlContent);
        
        // 메타데이터 헤더 추가
        const header = `---
title: 수능 문항 분석 보고서
${metadata.source ? `source: ${metadata.source}` : ''}
date: ${new Date().toISOString().split('T')[0]}
generated-by: KICE-Alpha AI Analysis Engine
---

`;
        
        markdown = header + markdown;
        
        // 푸터 추가
        const footer = `

---

## 📌 분석 정보

- **생성일**: ${new Date().toLocaleDateString('ko-KR')}
- **분석 시스템**: 이원목적분류표 기반 문항 분석 시스템
- **AI 엔진**: KICE-Alpha (Claude Sonnet 4.5)

---

*본 분석은 교육평가 이론과 인공지능 기술을 결합하여 생성되었습니다.*
`;
        
        markdown += footer;
        
        // Blob 생성 및 다운로드
        const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `수능문항분석_${metadata.source || new Date().getTime()}.md`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showAlert('Markdown 파일이 다운로드되었습니다!', 'success');
        
    } catch (error) {
        console.error('Markdown export error:', error);
        showAlert(`Markdown 내보내기 실패: ${error.message}`, 'danger');
    }
}

// 스크립트 동적 로드 헬퍼
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// 전역 함수로 노출
window.exportToPDF = exportToPDF;
window.exportToHTML = exportToHTML;
window.exportToMarkdown = exportToMarkdown;
