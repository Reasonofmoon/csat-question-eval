# 🎓 수능 문항 분석 시스템 - 시작하기

## 🎉 설치 완료!

프로젝트 파일이 성공적으로 생성되었습니다.

---

## 📁 파일 구조

```
수능문항분석시스템/
│
├── index.html              ⭐ 메인 파일 (이것을 열어주세요!)
├── analysis-template.js    🔧 분석 템플릿
├── export-utils.js         📤 내보내기 기능
│
├── README.md              📖 프로젝트 문서
├── DEPLOY.md              🚀 배포 가이드
├── EXAMPLES.md            📝 예제 문항
├── PROJECT_SUMMARY.md     📊 프로젝트 요약
├── LICENSE                📜 라이선스
└── .gitignore            🔒 Git 설정
```

---

## 🚀 3분 안에 시작하기

### 1단계: 파일 열기 (10초)

**방법 A: 파일 탐색기에서**
```
1. 수능문항분석시스템 폴더 열기
2. index.html 더블클릭
3. 브라우저에서 자동 실행!
```

**방법 B: 브라우저에서 직접**
```
1. Chrome/Firefox/Edge 실행
2. Ctrl+O (파일 열기)
3. index.html 선택
```

### 2단계: API Key 발급 (2분)

```
1. 🌐 https://console.anthropic.com/ 접속
2. 🔐 계정 생성/로그인
3. 🔑 API Keys → Create Key
4. 📋 키 복사 (sk-ant-api03-...)
5. 🖥️ 시스템에 붙여넣기
```

> 💡 **팁**: API Key는 브라우저에 안전하게 저장되며, 다음 방문 시 자동으로 불러옵니다.

### 3단계: 첫 분석 실행! (30초)

```
1. 📝 EXAMPLES.md 열기
2. 📋 예제 문항 하나 복사
3. 🖥️ 시스템에 붙여넣기
4. 🔍 "AI 분석 시작" 버튼 클릭
5. ⏱️ 10-30초 대기
6. ✅ 결과 확인!
```

---

## 📝 첫 번째 예제 (복사해서 사용하세요!)

### 출처
```
2023학년도 대학수학능력시험 영어 21번
```

### 문제
```
When you encounter a stressful situation, your mind narrows its focus to the immediate problem at hand. This is a useful adaptation that helps you deal with threats. However, this narrow focus comes at a cost. When your attention is focused on the stressor, you have fewer cognitive resources available for other tasks. This is why it's hard to concentrate on work when you're worried about a personal problem. Researchers have found that people who experience chronic stress show reduced cognitive flexibility and have difficulty shifting their attention from one task to another. They also struggle to update their mental representations when new information becomes available. In other words, stress makes you mentally inflexible. On the other hand, when you're feeling relaxed and safe, your mind is free to wander and make unexpected connections. You're more likely to notice interesting details in your environment and to think creatively. In this state, you're like a scuba diver exploring the ocean depths, whereas when you're stressed, you zip along the surface like a guy on a Jet Ski, missing the rich world beneath the waves.
```

### 선택지
```
① getting deeply engaged with internal thoughts
② making quick but superficial observations  
③ exploring various perspectives methodically
④ maintaining focus despite external distractions
⑤ synthesizing information from multiple sources
```

### 정답
```
②
```

---

## 💡 주요 기능

### ✅ 제공되는 분석 항목

1. **📊 이원목적분류표**
   - 내용 영역 (주제/소재)
   - 행동 영역 (블룸 6단계)

2. **🔬 문항 설계 원리**
   - 출제 의도
   - 지문 구조 분석
   - 선택지 전략

3. **💡 풀이 전략**
   - 단계별 접근법
   - 정답 근거
   - 오답 분석

4. **📚 학습 자료**
   - 개념 정리
   - 연관 문항 유형
   - 추천 학습법

5. **📤 내보내기**
   - PDF (인쇄용)
   - HTML (웹 공유)
   - Markdown (편집용)

---

## 🌐 GitHub Pages 배포 (선택사항)

### 온라인으로 공유하고 싶다면?

```bash
# 1. GitHub 저장소 생성
# 2. 파일 업로드
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo.git
git push -u origin main

# 3. Settings → Pages → Source: main 선택
# 4. 완료! https://username.github.io/repo/ 접속
```

> 📖 자세한 내용은 **DEPLOY.md** 참고

---

## 💰 비용 안내

### Claude API 요금

```yaml
모델: Claude Sonnet 4.5
문항당 비용: $0.05 - $0.15

예상 사용량:
  - 월 10개 분석: $0.50 - $1.50
  - 월 50개 분석: $2.50 - $7.50
  - 월 100개 분석: $5.00 - $15.00
```

> 💡 **절약 팁**: 
> - 필수 정보만 입력 (출처, 해설 생략 가능)
> - 비슷한 문항은 묶어서 분석

---

## 🆘 문제 해결

### 문제: API 오류 발생
```
✅ 해결방법:
1. API Key 재확인 (sk-ant-api03-... 형식)
2. Anthropic Console에서 크레딧 확인
3. 인터넷 연결 확인
```

### 문제: 분석이 안 됩니다
```
✅ 해결방법:
1. 문제 본문과 선택지 필수 입력 확인
2. 선택지 형식 확인 (①②③④⑤)
3. 브라우저 콘솔(F12)에서 오류 확인
```

### 문제: PDF 다운로드 안 됨
```
✅ 해결방법:
1. 팝업 차단 해제
2. 브라우저 업데이트
3. 다른 브라우저에서 시도
```

---

## 📚 더 알아보기

### 문서 목록

| 파일 | 내용 |
|------|------|
| **README.md** | 프로젝트 전체 문서 |
| **EXAMPLES.md** | 예제 문항 모음 |
| **DEPLOY.md** | GitHub Pages 배포 |
| **PROJECT_SUMMARY.md** | 기술 문서 |

### 추천 읽기 순서

```
1. 이 파일 (START_HERE.md) ✅
2. EXAMPLES.md - 예제 실행
3. README.md - 상세 기능
4. DEPLOY.md - 배포 (필요시)
```

---

## 🎯 다음 단계

### 초보자
```
1. ✅ 예제 문항으로 테스트
2. ✅ 실제 문항 입력해보기
3. ✅ 결과 PDF로 저장
4. ✅ 기능 익히기
```

### 중급자
```
1. ✅ 여러 문항 분석
2. ✅ 결과 비교 분석
3. ✅ 학습 자료로 활용
4. ✅ 색상/템플릿 커스터마이징
```

### 고급자
```
1. ✅ GitHub Pages 배포
2. ✅ 프롬프트 최적화
3. ✅ 기능 확장 개발
4. ✅ 커뮤니티 기여
```

---

## 💬 지원 및 피드백

### 도움이 필요하신가요?

```
🐛 버그 발견:
   → GitHub Issues

💡 기능 제안:
   → GitHub Discussions

📧 이메일:
   → your-email@example.com
```

---

## 🎓 교육 활용 아이디어

### 교사용
- 수업 자료 제작
- 학생 평가 분석
- 출제 문항 연구

### 학생용
- 오답노트 작성
- 유형 파악
- 실력 진단

### 학원/과외
- 맞춤형 해설
- 학생별 분석
- 커리큘럼 설계

---

## ⭐ 프로젝트 정보

```yaml
버전: v1.0.0
라이선스: MIT
언어: HTML/CSS/JavaScript
AI: Claude Sonnet 4.5
배포: GitHub Pages 지원
```

---

## 🎉 시작 준비 완료!

**이제 index.html을 열고 첫 분석을 시작해보세요!**

```
🖱️ index.html 더블클릭
→ 브라우저 실행
→ API Key 입력
→ 예제 붙여넣기
→ 분석 시작!
```

**Happy Analyzing! 🎓📊✨**

---

*질문이나 문제가 있으시면 README.md의 FAQ 섹션을 확인해주세요.*
