# 🚀 배포 가이드 (Deployment Guide)

## GitHub Pages 자동 배포

### 준비사항
- GitHub 계정
- Git 설치
- 터미널/명령 프롬프트 접근

---

## 📦 Step 1: 저장소 생성

### 1-1. GitHub에서 새 저장소 만들기

```bash
# GitHub 웹사이트에서:
1. 로그인
2. 우측 상단 '+' → 'New repository'
3. Repository name: suneung-analysis (또는 원하는 이름)
4. Public 선택
5. 'Create repository' 클릭
```

---

## 💻 Step 2: 로컬에서 Git 초기화

### 2-1. 프로젝트 폴더로 이동

```bash
cd /path/to/수능문항분석시스템
```

### 2-2. Git 초기화 및 커밋

```bash
# Git 초기화
git init

# 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: 수능 문항 분석 시스템 v1.0"
```

### 2-3. 원격 저장소 연결

```bash
# 원격 저장소 추가 (URL은 본인의 것으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/suneung-analysis.git

# 메인 브랜치로 변경
git branch -M main

# 푸시
git push -u origin main
```

---

## 🌐 Step 3: GitHub Pages 활성화

### 3-1. 웹 인터페이스 방식

```bash
1. GitHub 저장소 페이지 이동
2. 'Settings' 탭 클릭
3. 좌측 메뉴에서 'Pages' 선택
4. 'Source' 섹션에서:
   - Branch: 'main' 선택
   - Folder: '/ (root)' 선택
5. 'Save' 클릭
```

### 3-2. 배포 완료 확인

```bash
# 약 1-2분 후:
1. 같은 Pages 페이지에서 배포 URL 확인
   예: https://YOUR_USERNAME.github.io/suneung-analysis/

2. 'Visit site' 버튼 클릭하여 확인
```

---

## 🔄 Step 4: 업데이트 배포

### 파일 수정 후 재배포

```bash
# 1. 파일 수정
# 2. Git에 변경사항 추가
git add .

# 3. 커밋
git commit -m "Update: 기능 개선"

# 4. 푸시 (자동으로 재배포됨)
git push origin main
```

---

## 🎯 원클릭 배포 스크립트

### Linux/macOS용 배포 스크립트

파일명: `deploy.sh`

```bash
#!/bin/bash

echo "🚀 수능 문항 분석 시스템 배포 시작..."

# 변경사항 확인
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 변경사항 발견. 커밋 진행..."
    
    # 커밋 메시지 입력 받기
    read -p "커밋 메시지를 입력하세요: " commit_msg
    
    # Git 작업
    git add .
    git commit -m "$commit_msg"
    git push origin main
    
    echo "✅ 배포 완료!"
    echo "🌐 약 1-2분 후 사이트가 업데이트됩니다."
else
    echo "ℹ️  변경사항이 없습니다."
fi
```

### Windows용 배포 스크립트

파일명: `deploy.bat`

```batch
@echo off
echo 🚀 수능 문항 분석 시스템 배포 시작...

git status --porcelain > nul 2>&1
if %errorlevel% neq 0 (
    echo 📝 변경사항 발견. 커밋 진행...
    
    set /p commit_msg="커밋 메시지를 입력하세요: "
    
    git add .
    git commit -m "%commit_msg%"
    git push origin main
    
    echo ✅ 배포 완료!
    echo 🌐 약 1-2분 후 사이트가 업데이트됩니다.
) else (
    echo ℹ️  변경사항이 없습니다.
)

pause
```

### 스크립트 실행

```bash
# Linux/macOS
chmod +x deploy.sh
./deploy.sh

# Windows
deploy.bat
```

---

## 🔧 커스텀 도메인 설정 (선택사항)

### 1. DNS 설정

```bash
# 도메인 관리 페이지에서 A 레코드 추가:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

# 또는 CNAME 레코드:
YOUR_USERNAME.github.io
```

### 2. CNAME 파일 생성

```bash
# 프로젝트 루트에 CNAME 파일 생성
echo "yourdomain.com" > CNAME

# 커밋 및 푸시
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

### 3. GitHub에서 도메인 확인

```bash
1. Settings → Pages
2. Custom domain 입력
3. 'Save' 클릭
4. DNS 확인 대기 (최대 24시간)
```

---

## 🛠️ 문제 해결

### 배포가 안 됩니다

**증상**: GitHub Pages URL에 접속해도 404 오류

**해결방법**:
```bash
# 1. Pages 설정 확인
Settings → Pages → Source가 'main' 브랜치로 설정되었는지 확인

# 2. index.html 파일 확인
루트 디렉토리에 index.html이 있는지 확인

# 3. 빌드 상태 확인
Actions 탭에서 배포 로그 확인
```

### 업데이트가 반영되지 않습니다

**증상**: 코드를 수정했는데 사이트에 반영 안 됨

**해결방법**:
```bash
# 1. 브라우저 캐시 삭제
Ctrl+Shift+R (강력 새로고침)

# 2. 배포 완료 대기
GitHub Actions에서 배포 완료 확인 (1-2분)

# 3. 커밋 확인
git log --oneline
# 마지막 커밋이 푸시되었는지 확인
```

### API Key가 저장되지 않습니다

**증상**: 새로고침하면 API Key 다시 입력해야 함

**해결방법**:
```bash
# 1. localStorage 확인
브라우저 개발자 도구 → Application → Local Storage

# 2. 브라우저 설정 확인
쿠키 및 사이트 데이터 차단 해제

# 3. 시크릿 모드 아님을 확인
일반 브라우저 창에서 사용
```

---

## 📊 배포 체크리스트

배포 전 확인사항:

- [ ] API Key 입력 필드 작동 확인
- [ ] 예제 문항으로 분석 테스트
- [ ] PDF/HTML/MD 내보내기 테스트
- [ ] 모바일 반응형 디자인 확인
- [ ] 브라우저 콘솔 에러 확인
- [ ] README.md의 URL 업데이트
- [ ] 라이선스 정보 확인

---

## 🎉 성공적인 배포!

축하합니다! 이제 다음과 같은 작업이 가능합니다:

✅ 전 세계 어디서나 접근 가능한 웹 애플리케이션  
✅ HTTPS 자동 적용으로 보안 연결  
✅ 무료 호스팅 (GitHub Pages)  
✅ Git을 통한 버전 관리  
✅ 자동 배포 (푸시만 하면 됨)

---

## 🌐 공유하기

배포 완료 후:

```bash
1. URL 공유: https://YOUR_USERNAME.github.io/suneung-analysis/
2. QR 코드 생성: https://www.qr-code-generator.com/
3. SNS 공유
4. 교육 커뮤니티에 소개
```

---

## 📞 추가 지원

문제가 계속되면:

- **GitHub Issues**: 버그 리포트
- **Stack Overflow**: 기술 질문
- **GitHub Discussions**: 일반 질문

---

**Happy Deploying! 🚀**
