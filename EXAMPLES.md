# 🚀 Quick Start Guide

## 빠른 시작하기

### 1분 만에 시작하기

#### Step 1: 파일 열기
```bash
# 브라우저에서 index.html 열기
open index.html  # macOS
start index.html # Windows
```

#### Step 2: API Key 입력
```
1. https://console.anthropic.com/ 접속
2. API Key 발급받기
3. 시스템에 입력
```

#### Step 3: 예제 문항 테스트
아래 예제 중 하나를 복사하여 붙여넣고 분석해보세요!

---

## 📝 예제 문항 모음

### 예제 1: 밑줄 의미 추론 (난이도: 상)

**출처**: 2023학년도 대학수학능력시험 영어 21번

**문제 본문**:
```
When you encounter a stressful situation, your mind narrows its focus to the immediate problem at hand. This is a useful adaptation that helps you deal with threats. However, this narrow focus comes at a cost. When your attention is focused on the stressor, you have fewer cognitive resources available for other tasks. This is why it's hard to concentrate on work when you're worried about a personal problem. Researchers have found that people who experience chronic stress show reduced cognitive flexibility and have difficulty shifting their attention from one task to another. They also struggle to update their mental representations when new information becomes available. In other words, stress makes you mentally inflexible. On the other hand, when you're feeling relaxed and safe, your mind is free to wander and make unexpected connections. You're more likely to notice interesting details in your environment and to think creatively. In this state, you're like a scuba diver exploring the ocean depths, whereas when you're stressed, you zip along the surface like a guy on a Jet Ski, missing the rich world beneath the waves.
```

**선택지**:
```
① getting deeply engaged with internal thoughts
② making quick but superficial observations  
③ exploring various perspectives methodically
④ maintaining focus despite external distractions
⑤ synthesizing information from multiple sources
```

**정답**: ②

---

### 예제 2: 글의 목적 추론 (난이도: 중)

**출처**: 2024학년도 전국연합학력평가 영어 18번

**문제 본문**:
```
Dear Members,

We are excited to announce the launch of our new online platform, "Community Connect." This platform has been designed to enhance communication among our members and provide easy access to important resources. Through Community Connect, you will be able to:

• View and register for upcoming events
• Access exclusive member-only content
• Connect with fellow members through discussion forums
• Receive real-time updates about community activities

To access the platform, simply visit www.communityconnect.org and use your membership number as your login ID. Your initial password is your date of birth (MMDDYYYY). We strongly recommend changing your password after your first login for security purposes.

If you have any questions or experience technical difficulties, please don't hesitate to contact our support team at support@communityconnect.org.

We look forward to seeing you online!

Best regards,
Sarah Johnson
Community Manager
```

**선택지**:
```
① 회원들에게 새로운 온라인 플랫폼 출시를 알리려고
② 회원들의 개인정보 보안 강화 방법을 안내하려고
③ 온라인 플랫폼 이용 시 발생한 문제점을 사과하려고
④ 회원들에게 커뮤니티 행사 참가를 독려하려고
⑤ 온라인 플랫폼 개선을 위한 의견을 수렴하려고
```

**정답**: ①

---

### 예제 3: 빈칸 추론 (난이도: 상)

**출처**: 2024학년도 전국연합학력평가 영어 33번

**문제 본문**:
```
In many traditional cultures, knowledge is not something you acquire from books or formal education. Instead, it exists only in practice — in the techniques of fishing, farming, or craft-making that are passed down through generations. This practical knowledge cannot be adequately captured in written instructions or verbal explanations. A master craftsman can show you how to shape wood or fire pottery, but the real learning happens through your own hands-on experience. The apprentice must develop a feel for the material, learning to recognize the subtle signs that indicate when the wood is ready to be carved or when the clay has reached the right consistency. This kind of knowledge is fundamentally different from theoretical knowledge because _______________. It is embodied in actions and can only be transmitted through direct participation and repeated practice. No amount of reading or watching videos can replace the experience of doing the work yourself under the guidance of an expert.
```

**선택지**:
```
① it requires understanding universal principles
② it exists only through physical engagement
③ it can be taught through detailed documentation
④ it depends on scientific explanation
⑤ it becomes more precise when written down
```

**정답**: ②

---

## 🎯 분석 예상 결과 미리보기

위 예제들을 분석하면 다음과 같은 항목들이 제공됩니다:

### 📊 이원목적분류표
- **내용 영역**: 심리학/사회문화/실용문
- **행동 영역**: 분석 수준 (블룸 4단계)

### 🔬 문항 설계 원리
- 출제 의도
- 지문 구조 (대립 구조, 비유 활용)
- 선택지 전략 (매력적 오답 설계)

### 💡 풀이 전략
1. 지문 구조 파악
2. 핵심 개념 추출
3. 선택지 소거법
4. 정답 확정

### 📚 학습 자료 추천
- 연관 개념
- 유사 문항 유형
- 학습 전략

---

## 💻 프로그래밍 방식 사용 (개발자용)

### JavaScript API 직접 호출

```javascript
// 분석 실행
const analysisData = {
    source: "2023학년도 수능 21번",
    question: "...",
    choices: "...",
    answer: "②",
    explanation: "..."
};

// 프롬프트 생성
const prompt = generateAnalysisPrompt(analysisData);

// Claude API 호출
const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'YOUR_API_KEY',
        'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 8000,
        messages: [{ role: 'user', content: prompt }]
    })
});

const result = await response.json();
console.log(result.content[0].text);
```

---

## 🎨 커스터마이징

### 색상 테마 변경

`index.html`의 CSS 변수 수정:

```css
:root {
    --primary-color: #3498db;    /* 메인 색상 */
    --secondary-color: #9b59b6;  /* 보조 색상 */
    --success-color: #27ae60;    /* 성공 색상 */
    /* ... */
}
```

### 프롬프트 커스터마이징

`index.html`의 `generateAnalysisPrompt()` 함수 수정:

```javascript
function generateAnalysisPrompt(data) {
    return `
    당신은 KICE-Alpha입니다.
    
    [커스터마이징된 지시사항]
    
    문항: ${data.question}
    ...
    `;
}
```

---

## 🐛 문제 해결 FAQ

### Q1: "API Key가 유효하지 않습니다" 오류
**A**: 
- API Key 형식 확인 (`sk-ant-api03-...`)
- 키가 만료되지 않았는지 확인
- Anthropic Console에서 새 키 발급

### Q2: 분석 결과가 이상합니다
**A**:
- 문항과 선택지를 정확히 입력했는지 확인
- 지문이 너무 짧거나 길지 않은지 확인
- 선택지 형식이 일관적인지 확인

### Q3: PDF 다운로드가 안 됩니다
**A**:
- 팝업 차단 해제
- 브라우저 업데이트
- 다른 브라우저에서 시도

### Q4: 분석이 너무 오래 걸립니다
**A**:
- 정상 소요 시간: 10-30초
- 30초 이상 걸리면 네트워크 확인
- API 상태 확인: https://status.anthropic.com/

---

## 📊 성능 최적화 팁

### 토큰 사용량 줄이기

1. **불필요한 해설 제거**: 해설란은 필요시만 입력
2. **출처 간략화**: "2024 수능 21번" 정도로만
3. **선택지 간결화**: 너무 긴 선택지는 요약

### 비용 절감

- **예상 비용**: 문항당 $0.05-0.15
- **월 100개 분석**: 약 $5-15
- **배치 처리**: 한 번에 여러 문항 준비 후 순차 분석

---

## 🎓 교육 활용 사례

### 교사용
- ✅ 수업 자료 제작
- ✅ 학생 오답 분석
- ✅ 평가 문항 연구

### 학생용
- ✅ 자기주도 학습
- ✅ 오답노트 작성
- ✅ 문제 유형 파악

### 연구자용
- ✅ 문항 품질 분석
- ✅ 출제 경향 연구
- ✅ 교육과정 연계성 검증

---

## 🔗 유용한 링크

- **Anthropic Console**: https://console.anthropic.com/
- **Claude API Docs**: https://docs.anthropic.com/
- **GitHub Pages Guide**: https://pages.github.com/
- **수능 기출문제**: https://www.suneung.re.kr/

---

## 💬 커뮤니티

- **Issues**: 버그 리포트 및 기능 요청
- **Discussions**: 사용법 질문 및 아이디어 공유
- **Wiki**: 자세한 가이드 및 예제

---

**이제 직접 분석해보세요!** 🚀

위의 예제 문항을 복사하여 시스템에 입력하고,  
AI가 생성하는 전문적인 분석을 경험해보세요!
