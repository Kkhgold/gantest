# Kkhgold · Engineering Portfolio

React + Vite 기반 포트폴리오입니다. 포토공정 노광장비 엔지니어로서 쌓은 16년의 설비 메인터넌스 경험과 현재 시스템 업무, 학업과 배움의 여정을 소개합니다.

공개 주소: https://kkhgold.github.io/gantest/

## 로컬 실행

```sh
npm ci
npm run dev
```

터미널에 표시되는 `/gantest/` 주소를 엽니다.

## 빌드 및 배포

```sh
npm run build
npm run preview
```

배포 파일은 `dist/`에 생성됩니다. `vite.config.js`의 `base: '/gantest/'`는 GitHub Pages 저장소 경로에 맞춘 설정입니다. GitHub Pages Source는 GitHub Actions를 사용합니다. main 브랜치 변경 시 `.github/workflows/pages.yml`이 의존성을 설치하고 빌드 후 자동 배포합니다.

## 구성

- `src/App.jsx`: 페이지 구성
- `src/components/`: 헤더, 아크 원자로, 소개, 경력, 배움, GitHub 연결 등의 컴포넌트
- `src/components/Exposure.jsx`: 노광 원리 SVG, 4단계 설명, 자동 재생 및 일시정지
- `src/components/exposure.css`: 노광 도식의 반응형 스타일과 빛 이동 효과
- `styles.css`, `arc-theme.css`, `reactor-detail.css`: 기존 디자인과 원자로 링 회전

노광 원리는 투과형 레티클과 투영 렌즈를 사용하는 개념도입니다. 노광으로 감광막에 잠상이 형성되고, 별도 현상 공정에서 패턴이 드러나는 양성 감광막 예시를 보여줍니다. 실제 장비 구조와 축척을 재현한 그림이 아닙니다.

동작 줄이기 설정에서는 원자로 회전, 빛 흐름과 자동 단계 전환을 비활성화합니다. 각 단계 버튼으로 설명을 직접 볼 수 있습니다.

실명 대신 Kkhgold를 사용하며, 회사명·장비 모델·프로젝트·자격증·성과 수치는 임의로 추가하지 않았습니다. 데이터센터와 AI는 디자인 모티프이며 해당 분야의 경력을 의미하지 않습니다. Google Fonts를 사용할 수 없으면 시스템 글꼴로 표시됩니다.
