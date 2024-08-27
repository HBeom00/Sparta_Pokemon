![PokemonAshGIF](https://github.com/user-attachments/assets/3ae23afd-a508-430b-8e2e-2567476f023e)
# Pokemon Dex
Pokemon MOCK_DATA를 활용하여 상세정보를 보여주는 도감 사이트 입니다 :D 

<br>

# 🔗 배포 링크
➡️ https://sparta-pokemon-eight.vercel.app/

<br>

# 📂 파일 구조
      📦src
      ┣ 📂assets
      ┃ ┣ 📜pokeball.png
      ┃ ┣ 📜pokemon-logo.png
      ┃ ┗ 📜react.svg
      ┣ 📂components
      ┃ ┣ 📜Dashboard.jsx
      ┃ ┣ 📜PokemonCard.jsx
      ┃ ┗ 📜PokemonList.jsx
      ┣ 📂pages
      ┃ ┣ 📜Dex.jsx
      ┃ ┣ 📜Home.jsx
      ┃ ┗ 📜PokemonDetail.jsx
      ┣ 📂route
      ┃ ┗ 📜Router.jsx
      ┣ 📂rtk
      ┃ ┣ 📂slices
      ┃ ┃ ┗ 📜pokemonSlice.js
      ┃ ┗ 📂store
      ┃ ┃ ┗ 📜store.js
      ┣ 📜App.css
      ┣ 📜App.jsx
      ┣ 📜index.css
      ┣ 📜main.jsx
      ┣ 📜mock.js
      ┣ 📜NotFoundPage.jsx
      ┗ 📜reset.css 

# 🛠️ 기술 스택
<div style="margin: ; text-align: left;" "text-align: left;"> 
    <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white">
    <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
    <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
</div>

<br>

# 🎬 페이지별 주요 기능
## 1. Home Page
![스크린샷 2024-08-27 102808](https://github.com/user-attachments/assets/53848397-5523-4972-a028-e6f33e0cf4a1)
- **useNavigate()** 사용 ➡️ **Dex Page**로 이동
## 2. Dex Page
![스크린샷 2024-08-27 112337](https://github.com/user-attachments/assets/6bf7032c-530e-4a24-a0f8-2d68b75e96b9)
- **RTK**로 **Dashboard**에 추가되는 포켓몬 전역으로 상태 관리
- **queryString**으로 포켓몬 ID를 받아 해당 포켓몬의 상세 정보를 보여주는 **Detail Page**로 이동
- **UI 라이브러리(react-toastify)** 활용하여 포켓몬 추가, 삭제 버튼 클릭 시 왼쪽 하단에 **toast창** 표시
## 3. Detail Page
![스크린샷 2024-08-27 105459](https://github.com/user-attachments/assets/2fb4dbfd-6f71-4ca6-91e6-e68a46cc1d4c)
- 돌아가기 버튼 ➡️ Dex Page로 이동 ( 기존 Dashboard에 추가된 포켓몬 유지 )
- 추가 버튼 ➡️ 해당 포켓몬 Dashboard에 추가

<br>

# 🧑‍💻 개발 블로그
<div style="text-align: left;"> <a href=https://velog.io/@hbeom00> <img src="https://img.shields.io/badge/Velog-20C997?style=for-the-badge&logo=Velog&logoColor=white&link=https://velog.io/@hbeom00"> </a></div> 
   
