

# /ko/academy 페이지 구현 계획

PRD와 기존 `/ko/solution` 페이지 패턴을 분석 완료했습니다.

## 생성할 파일 (총 12개)

### 에셋
- **`src/assets/instructor-park.png`** — 업로드된 박주현 강사 프로필 사진 복사

### 섹션 컴포넌트 (`src/components/academy/ko/`)

| 파일 | 역할 |
|------|------|
| `AcademyHeroSection.tsx` | 다크 그라데이션 배경, 메인/서브 카피, CTA 2개 (수강 신청→#pricing, 커리큘럼 보기→#curriculum) |
| `WhySection.tsx` | 도입 문단 + 3-column 카드 (원리 중심 교육, 리스크 관리, 1:1 멘토링). lucide 아이콘 사용 |
| `CurriculumSection.tsx` | shadcn Accordion UI, 5개 항목에 번호 뱃지 |
| `HowWeTeachSection.tsx` | 2-column (텍스트+비주얼), 대면/화상 교육 포인트 |
| `InstructorSection.tsx` | 프로필 사진 + 경력 7개 항목 불릿 리스트 |
| `AcademyPricingSection.tsx` | 단일 패키지 카드 ₩330,000, 혜택 체크리스트, CTA → 카카오 채널 |
| `AcademyFAQSection.tsx` | Accordion FAQ 5개 항목 (solution FAQSection 패턴 동일) |
| `BottomCTASection.tsx` | 다크 배경, "지금 바로 시작하세요" + CTA |
| `ReviewsSection.tsx` | `return null` — 숨김 처리, 추후 활성화 가능 구조 |

### 헤더
- **`src/components/academy/ko/AcademyHeaderKo.tsx`** — `SolutionHeaderKoNew.tsx` 복제 후 네비 링크를 `#why`, `#curriculum`, `#how`, `#pricing`, `#faq`로 변경. 로고 클릭→`/ko/academy`

### 페이지
- **`src/pages/ko/AcademyKo.tsx`** — SEOHead + AcademyHeaderKo + 8개 섹션 + FooterKo

### 라우팅
- **`src/App.tsx`** — `/ko/academy` 라우트 추가

## 기술 패턴
- `framer-motion` whileInView 애니메이션 (solution 페이지 동일)
- shadcn Accordion 재사용
- CTA 버튼 → `https://pf.kakao.com/_EAuxcn` (카카오 채널)
- 반응형: 모바일 1열, 데스크탑 멀티컬럼
- 다크/밝은 배경 교차 리듬

## 섹션 순서
Hero → Why (#why) → Curriculum (#curriculum) → How We Teach (#how) → Instructor → Pricing (#pricing) → Reviews (hidden) → FAQ (#faq) → Bottom CTA

