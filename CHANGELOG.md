# 변경 이력 (Changelog)

## [2025-11-16] - 최신 AI 모델 추가 및 토큰 한도 증가

### ✨ 추가된 기능

#### OpenAI 지원 추가
- **GPT-5 (High)** ⭐ - 최고 성능 모델
- **GPT-4.1** - GPT-4 개선 버전
- **GPT-4o** - 최적화된 GPT-4
- **o3-pro** - 추론 특화 모델
- **GPT-4 Turbo** (Legacy)

#### Claude 최신 모델 추가
- **Claude Opus 4.1** ⭐ - 최고 성능 모델
- **Claude Opus 4.1 Thinking-16k** - 긴 추론 체인 지원
- 기존 Claude 3 시리즈를 Legacy로 표시

#### Gemini 최신 모델 추가
- **Gemini 2.5 Pro** ⭐ - 최신 프로 버전
- **Gemini 2.5 Flash Reasoning** - 추론 특화 경량 모델
- 기존 Gemini 2.0 시리즈를 Legacy로 표시

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
| 최고 성능 필요 | GPT-5, Claude Opus 4.1 | 최상위 성능 |
| 비용 효율 | Gemini 2.5 Flash, Claude Sonnet 4 | 성능/비용 균형 |
| 추론 특화 | o3-pro, Gemini 2.5 Flash Reasoning | 논리적 사고 최적화 |

### 💰 비용 안내
- GPT-5: 프리미엄 요금 (최고 품질)
- Claude Opus 4.1: 프리미엄 요금
- Gemini 2.5 Pro: 경쟁력 있는 요금
- 각 모델별 상세 요금은 해당 제공자의 pricing 페이지 참조

---

## 이전 버전

### [2025-01-XX] - 초기 릴리스
- 이원목적분류표 기반 분석
- 블룸 분류학 적용
- PDF/HTML/MD 내보내기
- Claude 및 Gemini API 지원

---

*최신 업데이트: 2025년 11월 16일*
