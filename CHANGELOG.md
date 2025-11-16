# 변경 이력 (Changelog)

## [2025-11-16] - 최신 AI 모델 추가 및 토큰 한도 증가

### ✨ 추가된 기능

#### OpenAI 지원 추가 (실제 API 모델명)
- **gpt-4o** ⭐ - 최신 멀티모달 모델 (텍스트 + 이미지)
- **gpt-4o-mini** - 빠른 응답 경량 모델
- **gpt-4-turbo** - GPT-4 터보 버전
- **gpt-4** - 표준 GPT-4
- **gpt-3.5-turbo** - 경량 모델
- **o1-preview** - 추론 특화 모델
- **o1-mini** - 추론 경량 모델

#### Claude 최신 모델 추가 (실제 API 모델명)
- **claude-sonnet-4-20250514** ⭐ - 최신 Sonnet 4
- **claude-3-7-sonnet-20250219** - Claude 3.7 Sonnet
- **claude-3-5-sonnet-20241022** - Claude 3.5 Sonnet (Oct)
- **claude-3-5-sonnet-20240620** - Claude 3.5 Sonnet (Jun)
- **claude-3-opus-20240229** - Claude 3 Opus
- **claude-3-haiku-20240307** - Claude 3 Haiku (빠른 응답)

#### Gemini 최신 모델 추가 (실제 API 모델명)
- **gemini-2.0-flash-exp** ⭐ - 최신 2.0 Flash (빠른 응답)
- **gemini-exp-1206** - Gemini 2.0 Pro Experimental (고성능)
- **gemini-2.0-flash-thinking-exp-01-21** - 추론 특화 모델
- **gemini-1.5-pro** - Gemini 1.5 Pro
- **gemini-1.5-flash** - Gemini 1.5 Flash (빠른 응답)
- **gemini-1.5-flash-8b** - Gemini 1.5 Flash 8B (경량)

### 🚀 성능 개선

#### 최대 토큰 출력 증가
- **이전**: 8,000 tokens
- **변경**: 16,000 tokens
- **효과**: 긴 분석 결과 중간 끊김 방지

### 🔧 UI/UX 개선

#### API Key 입력 안내 개선
- Claude: `console.anthropic.com에서 발급`
- Gemini: `ai.google.dev에서 발급`
- OpenAI: `platform.openai.com에서 발급`

#### 모델 선택 UI
- 최신 모델에 ⭐ 표시
- Legacy 모델 명시적 표시
- 각 모델의 특징 표시 (예: "최고 성능", "추론 특화")

### 📋 기술적 변경사항

#### API 호출 함수 추가
```javascript
// 새로운 OpenAI API 호출 함수
async function callOpenAIAPI(prompt)
```

#### 모델 목록 구조 확장
```javascript
const models = {
    claude: [...],  // 5개 모델
    gemini: [...],  // 5개 모델
    openai: [...]   // 5개 모델 (신규)
}
```

### 🎯 모델 선택 가이드

| 용도 | 추천 모델 | 이유 |
|------|----------|------|
| 최고 품질 분석 | Claude Sonnet 4, GPT-4o | 최신 모델, 우수한 텍스트 이해력 |
| 빠른 응답 | Gemini 2.0 Flash, GPT-4o Mini | 빠른 속도, 비용 효율적 |
| 추론 특화 | o1-preview, Gemini Flash Thinking | 논리적 분석 최적화 |
| 경량/저비용 | Claude Haiku, Gemini 1.5 Flash 8B | 기본 분석, 대량 처리 |
| 멀티모달 | GPT-4o, Gemini Pro | 텍스트 + 이미지 분석 |

### 💰 비용 안내 (상대적 비교)
- **프리미엄 티어**: GPT-4o, Claude Sonnet 4, Gemini Pro - 최고 품질
- **표준 티어**: GPT-4, Claude 3.5 Sonnet - 균형잡힌 성능/비용
- **경량 티어**: GPT-4o Mini, Gemini Flash, Claude Haiku - 비용 효율적
- **추론 모델**: o1-preview/mini - 복잡한 문제 해결

각 모델별 상세 요금은 해당 제공자의 pricing 페이지 참조:
- OpenAI: https://openai.com/api/pricing/
- Anthropic: https://www.anthropic.com/pricing
- Google: https://ai.google.dev/pricing

---

## 이전 버전

### [2025-01-XX] - 초기 릴리스
- 이원목적분류표 기반 분석
- 블룸 분류학 적용
- PDF/HTML/MD 내보내기
- Claude 및 Gemini API 지원

---

*최신 업데이트: 2025년 11월 16일*
