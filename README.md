# React + TypeScript + Tailwind + shadcn/ui 템플릿

> 🚀 **프로덕션 준비된 React 웹 애플리케이션 템플릿**  
> 현대적인 개발 환경과 UI 컴포넌트가 미리 설정된 템플릿입니다.

## ✨ 포함된 기술 스택

### 핵심 프레임워크
- **React 18** - 최신 React 기능
- **TypeScript** - 타입 안정성
- **Vite** - 빠른 빌드 도구

### UI & 스타일링
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **shadcn/ui** - 고품질 UI 컴포넌트 시스템
- **Framer Motion** - 부드러운 애니메이션

### 상태 관리 & 라우팅
- **React Router v6** - 클라이언트 사이드 라우팅
- **Zustand** - 가벼운 상태 관리
- **React Query** - 서버 상태 관리

### 개발 도구
- **ESLint** - 코드 품질 관리
- **TypeScript** - 타입 체크
- **Vite** - 개발 서버 & 빌드

## 🚀 빠른 시작

### 1. 템플릿 복제

```bash
# 이 템플릿을 새 프로젝트로 복제
git clone https://github.com/jsk3342/template_for_claude.git my-new-project
cd my-new-project
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 변수 설정

```bash
# .env.local 파일 생성
cp .env.example .env.local
# 필요한 환경 변수 값 입력
```

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`으로 접속하세요.

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── ui/             # shadcn/ui 컴포넌트
│   ├── layout/         # 레이아웃 컴포넌트
│   └── features/       # 기능별 컴포넌트
├── pages/              # 페이지 컴포넌트
├── hooks/              # 커스텀 훅
├── lib/                # 유틸리티 함수
├── types/              # TypeScript 타입 정의
└── styles/             # 전역 스타일
```

## 🎨 UI 컴포넌트 사용법

### shadcn/ui 컴포넌트 추가

```bash
# 원하는 컴포넌트 설치
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

### 사용 예시

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>제목</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default">클릭하세요</Button>
      </CardContent>
    </Card>
  )
}
```

## 🔧 사용 가능한 스크립트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 파일 미리보기
npm run preview

# 타입 체크
npm run type-check

# 린트 검사
npm run lint
```

## 🌐 환경 변수

`.env.local` 파일에 다음 변수들을 설정하세요:

```bash
# 앱 기본 설정
VITE_APP_URL=http://localhost:5173

# Supabase (선택사항)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe (선택사항)  
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

## 📦 추가 설치 가능한 패키지

### 데이터베이스 & 백엔드
```bash
npm install @supabase/supabase-js  # Supabase
npm install @prisma/client prisma  # Prisma
```

### 유틸리티
```bash
npm install date-fns              # 날짜 유틸리티
npm install zod                   # 스키마 검증
npm install react-hook-form       # 폼 관리
```

### UI 확장
```bash
npm install lucide-react          # 아이콘
npm install @radix-ui/react-*     # Radix UI 컴포넌트
```

## 🎯 템플릿 커스터마이징

### 1. 브랜딩 변경
- `src/components/layout/Header.tsx` - 네비게이션 로고/메뉴 수정
- `tailwind.config.js` - 색상 팔레트 커스터마이징
- `src/index.css` - CSS 변수 값 수정

### 2. 라우팅 설정
- `src/App.tsx` - 라우트 경로 추가/수정
- `src/pages/` - 새로운 페이지 컴포넌트 생성

### 3. 상태 관리
- `src/hooks/` - 커스텀 훅 추가
- Zustand store 설정 (필요시)

## 🚀 배포

### Vercel (추천)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# dist 폴더를 Netlify에 업로드
```

## 🤝 기여하기

1. 이 레포지토리를 Fork하세요
2. 새 기능 브랜치를 생성하세요 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 푸시하세요 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성하세요

## 📄 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

💡 **팁**: 이 템플릿을 사용해서 빠르게 프로젝트를 시작하고, 필요한 기능들을 점진적으로 추가해보세요!