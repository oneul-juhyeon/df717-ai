

# /ko/academy 페이지 구현 계획

## 개요
PRD에 따라 DF 트레이딩 아카데미 페이지(`/ko/academy`)를 구현합니다. 기존 `/ko/solution` 페이지의 디자인 시스템, 헤더, 푸터, 컴포넌트 패턴을 최대한 재사용합니다.

## 구현할 파일 목록

### 1. 페이지 파일
- **`src/pages/ko/AcademyKo.tsx`** — 메인 페이지. `SolutionKo.tsx` 구조를 따라 SEOHead + Header + 섹션들 + Footer 구성

### 2. 섹션 컴포넌트 (src/components/academy/ko/)
총 8개 섹션을 개별 컴포넌트로 생성:

| 컴포넌트 | 내용 |
|---------|------|
| `AcademyHeroSection.tsx` | 풀너비 히어로, 메인/서브 카피, CTA 2개 (수강 신청 → #pricing, 커리큘럼 보기 → #curriculum) |
| `WhySection.tsx` | 3-column 카드: 원리 중심 교육, 리스크 관리, 1:1 멘토링 |
| `CurriculumSection.tsx` | Accordion UI, 5개 커리큘럼 항목 |
| `HowWeTeachSection.tsx` | 2-column (텍스트 + 비주얼), 대면/화상 교육 포인트 |
| `InstructorSection.tsx` | 강사 박주현 프로필 (업로드된 이미지 사용), 경력 사항 |
| `AcademyPricingSection.tsx` | 단일 패키지 카드 (₩330,000), 혜택 체크리스트, CTA 버튼. `/ko/solution` PricingSection 스타일 준용 |
| `AcademyFAQSection.tsx` | Accordion FAQ 5개 항목 |
| `BottomCTASection.tsx` | "지금 바로 시작하세요" + CTA 버튼 |

- **수강 후기 섹션**: PRD 지시에 따라 컴포넌트는 생성하되 숨김 처리

### 3. 헤더
- **`AcademyHeaderKo.tsx`** — `SolutionHeaderKoNew.tsx` 기반으로 생성. 내부 네비게이션 링크를 아카데미 섹션 앵커(#why, #curriculum, #how, #pricing, #faq)로 변경. 로고 클릭 시 `/ko/academy`로 이동

### 4. 라우팅 & 네비게이션
- **`src/App.tsx`** — `/ko/academy` 라우트 추가
- 강사 프로필 이미지를 `src/assets/`에 복사

### 5. CTA 동작
- "수강 신청하기" 버튼 → 현재는 카카오 채널(`https://pf.kakao.com/_EAuxcn`) 또는 contact 페이지로 연결 (결제 플로우는 `/ko/solution` 방식으로 추후 연동 가능한 구조)

## 기술 패턴
- framer-motion `whileInView` 애니메이션 (기존 solution 페이지 동일)
- Accordion 컴포넌트 재사용 (shadcn/ui)
- 반응형: 모바일 1열 스택, 데스크탑 멀티컬럼
- 다크 배경 + 밝은 배경 교차 리듬 유지

