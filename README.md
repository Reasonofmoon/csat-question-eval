# 🎓 수능 문항 분석 시스템

이원목적분류표 기반 AI 문항 분석 웹 애플리케이션

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![Claude](https://img.shields.io/badge/Claude-Sonnet%204.5-purple.svg)

## 📋 목차

- [개요](#개요)
- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [설치 및 실행](#설치-및-실행)
- [GitHub Pages 배포](#github-pages-배포)
- [사용 방법](#사용-방법)
- [시스템 구조](#시스템-구조)
- [API 설정](#api-설정)
- [내보내기 기능](#내보내기-기능)
- [주의사항](#주의사항)
- [라이선스](#라이선스)

---

## 🎯 개요

**수능 문항 분석 시스템**은 교육평가 이론과 AI 기술을 결합하여 수능 문항을 과학적으로 분석하는 웹 애플리케이션입니다.

### 핵심 특징

✅ **이원목적분류표 기반 분석**: 내용 영역 × 행동 영역 매트릭스  
✅ **블룸 분류학 적용**: 6단계 인지 수준 분석  
✅ **토큰 최적화**: 템플릿 기반 구조화 출력으로 비용 절감  
✅ **다중 포맷 지원**: PDF, HTML, Markdown 내보내기  
✅ **정적 사이트**: GitHub Pages로 무료 배포 가능  
✅ **완전한 클라이언트 사이드**: 서버 불필요, 브라우저에서 모든 처리

---

## 🚀 주요 기능

### 1. 📊 종합 문항 분석

- **이원목적분류표 매핑**
  - 내용 영역 (주제/소재, 교육과정 연계)
  - 행동 영역 (블룸의 6단계 인지 수준)
  
- **문항 품질 평가**
  - 타당도 분석 (내용/구성/표면)
  - 신뢰도 분석
  - 공정성 검토
  - 난이도/변별도 예측

### 2. 🔬 설계 원리 분석

- 출제 의도 파악
- 지문 구조 분석
- 선택지 설계 전략
- 매력적 오답 설계 논리

### 3. 💡 풀이 전략 제공

- 단계별 풀이 과정
- 정답 근거 문장 추출
- 선택지별 오답 분석
- 효율적 접근법 제시

### 4. 📚 학습 자료 추천

- 개념 정리 포인트
- 연관 문항 유형
- 학습 전략 제안
- 추천 교재 및 자료

### 5. 📤 다중 포맷 내보내기

- **PDF**: 인쇄 최적화된 보고서
- **HTML**: 웹 브라우저에서 보기
- **Markdown**: 텍스트 편집기에서 편집 가능

---

## 🛠️ 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업
- **CSS3**: 반응형 디자인, Flexbox/Grid
- **Vanilla JavaScript**: 의존성 최소화

### AI Integration
- **Claude API**: Anthropic Claude Sonnet 4.5
- **Template-based Output**: 토큰 최적화

### Export Libraries
- **html2pdf.js**: PDF 생성
- **Custom Markdown Converter**: HTML → Markdown

### Hosting
- **GitHub Pages**: 무료 정적 사이트 호스팅

---

## 📥 설치 및 실행

### 방법 1: 로컬 실행

```bash
# 1. 저장소 클론 (또는 파일 다운로드)
git clone https://github.com/yourusername/suneung-analysis.git
cd suneung-analysis

# 2. 웹 서버 실행 (Python 예시)
python -m http.server 8000

# 3. 브라우저에서 열기
# http://localhost:8000
```

### 방법 2: 파일 직접 열기

```bash
# index.html을 더블클릭하여 브라우저에서 직접 열기
# 주의: 일부 브라우저는 로컬 파일 제한이 있을 수 있음
```

---

## 🌐 GitHub Pages 배포

### Step 1: GitHub 저장소 생성

1. [GitHub](https://github.com)에 로그인
2. 새 저장소 생성 (예: `suneung-analysis`)
3. Public 저장소로 설정

### Step 2: 파일 업로드

```bash
# Git 초기화
git init
git add .
git commit -m "Initial commit: 수능 문항 분석 시스템"

# 원격 저장소 연결
git remote add origin https://github.com/yourusername/suneung-analysis.git
git branch -M main
git push -u origin main
```

### Step 3: GitHub Pages 활성화

1. 저장소 → **Settings** 이동
2. 왼쪽 메뉴에서 **Pages** 선택
3. **Source** 섹션에서:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
4. **Save** 클릭

### Step 4: 배포 완료

- 약 1-2분 후 배포 완료
- 접속 URL: `https://yourusername.github.io/suneung-analysis/`

### 커스텀 도메인 (선택사항)

```
# CNAME 파일 생성
echo "your-domain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

---

## 📖 사용 방법

### 1. API Key 설정

1. [Anthropic Console](https://console.anthropic.com/)에서 API Key 발급
2. 시스템에 API Key 입력 (브라우저 로컬 스토리지에 안전하게 저장)

### 2. 문항 입력

```
📚 문항 출처: 2024학년도 수능 영어 21번 (선택사항)

📖 문제 본문:
[지문 및 질문 입력]

✅ 선택지:
① ...
② ...
③ ...
④ ...
⑤ ...

💯 정답: ③ (선택사항)

📝 해설: [기존 해설이 있다면 입력] (선택사항)
```

### 3. 분석 실행

- **🔍 AI 분석 시작** 버튼 클릭
- 약 10-30초 후 분석 결과 생성

### 4. 결과 확인 및 내보내기

- 화면에서 분석 결과 확인
- 필요한 형식으로 내보내기:
  - 📄 **PDF**: 인쇄/제출용
  - 🌐 **HTML**: 웹 공유용
  - 📝 **MD**: 편집/버전 관리용

---

## 🏗️ 시스템 구조

```
수능문항분석시스템/
│
├── index.html              # 메인 UI 및 로직
│   ├── 입력 패널           # 문항 정보 입력
│   ├── 출력 패널           # 분석 결과 표시
│   └── 내보내기 버튼       # PDF/HTML/MD 다운로드
│
├── analysis-template.js    # 분석 결과 HTML 템플릿
│   ├── getBaseTemplate()   # 기본 템플릿 구조
│   ├── fillTemplate()      # 데이터 주입
│   └── getInlineStyles()   # PDF용 스타일
│
├── export-utils.js         # 내보내기 유틸리티
│   ├── exportToPDF()       # PDF 생성
│   ├── exportToHTML()      # HTML 파일 생성
│   ├── exportToMarkdown()  # Markdown 변환
│   └── htmlToMarkdown()    # 변환 헬퍼
│
└── README.md               # 본 문서
```

### 데이터 흐름

```
사용자 입력
    ↓
프롬프트 생성 (템플릿 기반)
    ↓
Claude API 호출
    ↓
구조화된 HTML 응답
    ↓
화면 표시 + 내보내기 옵션
```

---

## 🔑 API 설정

### Claude API Key 발급

1. [Anthropic Console](https://console.anthropic.com/) 방문
2. 계정 생성/로그인
3. API Keys 메뉴에서 새 키 생성
4. `sk-ant-api03-...` 형식의 키 복사

### 요금 정보

- **모델**: Claude Sonnet 4.5
- **예상 비용**: 분석당 약 $0.05-0.15
- **토큰 사용량**: 
  - 입력: ~2,000 토큰 (프롬프트 + 문항)
  - 출력: ~4,000-6,000 토큰 (분석 결과)

### 보안

- API Key는 브라우저 localStorage에 저장
- 서버로 전송되지 않음 (완전한 클라이언트 사이드)
- HTTPS 통신으로 암호화

---

## 📤 내보내기 기능

### PDF 내보내기

- **라이브러리**: html2pdf.js (CDN)
- **페이지 크기**: A4
- **여백**: 15mm
- **페이지 나누기**: 섹션 단위 자동 조정
- **용도**: 인쇄, 제출, 보관

### HTML 내보내기

- **포맷**: 완전한 HTML 문서
- **스타일**: 인라인 CSS 포함
- **폰트**: Google Fonts (Noto Sans KR)
- **용도**: 웹 공유, 아카이빙

### Markdown 내보내기

- **포맷**: CommonMark 표준
- **메타데이터**: YAML Front Matter
- **변환**: 커스텀 HTML → MD 파서
- **용도**: Git 버전 관리, 편집, 재가공

---

## ⚠️ 주의사항

### 필수 요구사항

1. **최신 브라우저** 사용 권장
   - Chrome 90+
   - Firefox 88+
   - Safari 14+
   - Edge 90+

2. **안정적인 인터넷** 연결
   - API 호출 필요
   - CDN 리소스 로드

3. **유효한 API Key**
   - 만료되지 않은 키
   - 충분한 크레딧

### 제한사항

- **파일 크기**: 지문 길이 제한 없음 (API 제한 범위 내)
- **동시 요청**: 순차 처리 (1개씩)
- **오프라인**: 인터넷 연결 필수

### 문제 해결

**Q: API 오류가 발생합니다**
- API Key가 올바른지 확인
- 크레딧이 충분한지 확인
- 네트워크 연결 확인

**Q: PDF 다운로드가 안 됩니다**
- 팝업 차단 해제
- 브라우저 다운로드 설정 확인

**Q: 분석이 너무 오래 걸립니다**
- 지문이 너무 길지 않은지 확인
- API 응답 시간 (보통 10-30초)

---

## 📊 분석 항목 상세

### 이원목적분류표

| 구분 | 내용 |
|------|------|
| **내용 영역** | 주제, 소재, 교육과정 연계, 배경지식 |
| **행동 영역** | 블룸 6단계 (지식→이해→적용→분석→종합→평가) |

### 블룸 분류학 6단계

1. **지식 (Knowledge)**: 기억, 회상, 재인
2. **이해 (Comprehension)**: 해석, 번역, 요약
3. **적용 (Application)**: 원리 적용, 문제 해결
4. **분석 (Analysis)**: 요소 분해, 관계 파악
5. **종합 (Synthesis)**: 통합, 창조, 구성
6. **평가 (Evaluation)**: 판단, 비판, 선택

### 문항 품질 지표

- **타당도**: 측정하고자 하는 것을 얼마나 정확히 측정하는가
- **신뢰도**: 반복 측정 시 일관성
- **난이도**: 예상 정답률 (0.3-0.7 권장)
- **변별도**: 상하위 집단 구별 능력

---

## 🤝 기여하기

프로젝트 개선에 기여하고 싶으시다면:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 라이선스

MIT License

Copyright (c) 2025 수능 문항 분석 시스템

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## 👥 제작자

**KICE-Alpha Development Team**

- 교육평가 이론 설계
- AI 프롬프트 엔지니어링
- 웹 애플리케이션 개발

---

## 📞 문의

- **이슈**: [GitHub Issues](https://github.com/yourusername/suneung-analysis/issues)
- **이메일**: your-email@example.com
- **홈페이지**: https://yourusername.github.io/suneung-analysis/

---

## 🎓 참고 자료

### 교육평가 이론
- Bloom's Taxonomy (블룸의 교육목표 분류학)
- Item Response Theory (문항반응이론)
- Test Validity & Reliability (타당도와 신뢰도)

### 기술 문서
- [Claude API Documentation](https://docs.anthropic.com/)
- [GitHub Pages Guide](https://pages.github.com/)
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js)

---

## 📈 버전 히스토리

### v1.0.0 (2025-01-XX)
- 🎉 초기 릴리스
- ✅ 이원목적분류표 기반 분석
- ✅ 블룸 분류학 적용
- ✅ PDF/HTML/MD 내보내기
- ✅ GitHub Pages 배포 지원

---

**🌟 이 프로젝트가 도움이 되셨다면 Star를 눌러주세요!**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/suneung-analysis.svg?style=social&label=Star)](https://github.com/yourusername/suneung-analysis)
