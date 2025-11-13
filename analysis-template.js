// analysis-template.js
// 수능 문항 분석 결과 HTML 템플릿

const AnalysisTemplate = {
    // 기본 템플릿 구조
    getBaseTemplate() {
        return `
<div class="analysis-container">
    <h1>📊 수능 문항 종합 분석 보고서</h1>
    
    <section class="meta-info">
        <h2>📋 문항 메타정보</h2>
        <table>
            <tr><th>항목</th><th>내용</th></tr>
            {{META_INFO}}
        </table>
    </section>
    
    <section class="taxonomy">
        <h2>🎯 이원목적분류표 분석</h2>
        
        <h3>📚 내용 영역</h3>
        {{CONTENT_DOMAIN}}
        
        <h3>🧠 행동 영역 (블룸 분류학)</h3>
        <table>
            <tr><th>인지 수준</th><th>해당 여부</th><th>세부 설명</th></tr>
            {{BLOOM_TAXONOMY}}
        </table>
        
        <p><strong>🎯 핵심 측정 능력:</strong> {{CORE_COMPETENCY}}</p>
    </section>
    
    <section class="design-principle">
        <h2>🔬 문항 설계 원리 분석</h2>
        
        <h3>출제 의도</h3>
        {{DESIGN_INTENT}}
        
        <h3>지문 구조 분석</h3>
        {{PASSAGE_STRUCTURE}}
        
        <h3>선택지 설계 전략</h3>
        {{CHOICE_STRATEGY}}
    </section>
    
    <section class="solution">
        <h2>💡 풀이 전략 및 정답 해설</h2>
        
        <h3>🎯 정답: {{ANSWER}}</h3>
        
        <h3>📖 단계별 풀이 과정</h3>
        {{SOLUTION_STEPS}}
        
        <h3>🔍 근거 문장</h3>
        {{EVIDENCE}}
        
        <h3>❌ 오답 분석</h3>
        {{WRONG_ANSWER_ANALYSIS}}
    </section>
    
    <section class="quality-evaluation">
        <h2>📈 문항 품질 평가</h2>
        
        <h3>타당도 분석</h3>
        {{VALIDITY}}
        
        <h3>신뢰도 분석</h3>
        {{RELIABILITY}}
        
        <h3>공정성 검토</h3>
        {{FAIRNESS}}
        
        <h3>개선 제안</h3>
        {{IMPROVEMENTS}}
    </section>
    
    <section class="learning-materials">
        <h2>📚 연관 학습 자료 및 추천</h2>
        
        <h3>🎯 이 문항을 위한 학습 전략</h3>
        {{LEARNING_STRATEGY}}
        
        <h3>📖 추천 학습 자료</h3>
        {{RECOMMENDED_MATERIALS}}
        
        <h3>🔄 연관 문항 유형</h3>
        {{RELATED_TYPES}}
    </section>
    
    <section class="summary">
        <h2>✨ 종합 의견</h2>
        {{OVERALL_SUMMARY}}
    </section>
</div>
        `;
    },
    
    // 템플릿 채우기 헬퍼 함수
    fillTemplate(data) {
        let template = this.getBaseTemplate();
        
        // 각 플레이스홀더를 실제 데이터로 교체
        Object.keys(data).forEach(key => {
            const placeholder = `{{${key}}}`;
            template = template.replace(placeholder, data[key] || '정보 없음');
        });
        
        return template;
    },
    
    // 메타정보 테이블 행 생성
    generateMetaInfoRows(metaData) {
        const rows = [
            { label: '출처', value: metaData.source || '미제공' },
            { label: '문항 유형', value: metaData.type || '-' },
            { label: '예상 난이도', value: metaData.difficulty || '-' },
            { label: '배점', value: metaData.points || '-' },
            { label: '예상 정답률', value: metaData.correctRate || '-' },
            { label: '예상 변별도', value: metaData.discrimination || '-' }
        ];
        
        return rows.map(row => 
            `<tr><td>${row.label}</td><td>${row.value}</td></tr>`
        ).join('\n');
    },
    
    // 블룸 분류학 테이블 행 생성
    generateBloomTaxonomyRows(bloomData) {
        const levels = [
            '지식', '이해', '적용', '분석', '종합', '평가'
        ];
        
        return levels.map(level => {
            const data = bloomData[level] || { checked: false, description: '' };
            return `<tr>
                <td>${level}</td>
                <td>${data.checked ? 'O' : 'X'}</td>
                <td>${data.description || '-'}</td>
            </tr>`;
        }).join('\n');
    },
    
    // 리스트 항목 생성
    generateList(items, ordered = false) {
        if (!items || items.length === 0) {
            return '<p>정보 없음</p>';
        }
        
        const tag = ordered ? 'ol' : 'ul';
        const listItems = items.map(item => `<li>${item}</li>`).join('\n');
        
        return `<${tag}>${listItems}</${tag}>`;
    },
    
    // 간단한 스타일 추가 (PDF 내보내기용)
    getInlineStyles() {
        return `
<style>
    .analysis-container {
        font-family: 'Noto Sans KR', -apple-system, sans-serif;
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px;
        line-height: 1.8;
        color: #2c3e50;
    }
    
    h1 {
        color: #3498db;
        font-size: 2rem;
        margin-bottom: 30px;
        padding-bottom: 15px;
        border-bottom: 3px solid #3498db;
    }
    
    h2 {
        color: #9b59b6;
        font-size: 1.6rem;
        margin-top: 40px;
        margin-bottom: 20px;
        padding: 10px 0;
        border-left: 5px solid #9b59b6;
        padding-left: 15px;
    }
    
    h3 {
        color: #2c3e50;
        font-size: 1.3rem;
        margin-top: 25px;
        margin-bottom: 15px;
        font-weight: 600;
    }
    
    section {
        margin-bottom: 50px;
        page-break-inside: avoid;
    }
    
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    th {
        background: linear-gradient(135deg, #3498db, #2ecc71);
        color: white;
        padding: 12px;
        text-align: left;
        font-weight: 600;
    }
    
    td {
        padding: 12px;
        border: 1px solid #e9ecef;
    }
    
    tr:nth-child(even) {
        background: #f8f9fa;
    }
    
    ul, ol {
        margin: 15px 0;
        padding-left: 30px;
    }
    
    li {
        margin-bottom: 10px;
    }
    
    blockquote {
        border-left: 4px solid #3498db;
        padding-left: 20px;
        margin: 20px 0;
        color: #555;
        font-style: italic;
        background: #f8f9fa;
        padding: 15px 20px;
        border-radius: 5px;
    }
    
    strong {
        color: #2c3e50;
        font-weight: 600;
    }
    
    .badge {
        display: inline-block;
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
        margin-right: 8px;
    }
    
    @media print {
        body {
            background: white;
        }
        
        .analysis-container {
            padding: 20px;
        }
        
        h2 {
            page-break-after: avoid;
        }
        
        section {
            page-break-inside: avoid;
        }
    }
</style>
        `;
    }
};

// 전역으로 노출
window.AnalysisTemplate = AnalysisTemplate;
