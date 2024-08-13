![slice](https://capsule-render.vercel.app/api?type=slice&color=ffb703&height=200&text=React&fontAlign=75&rotate=13&fontAlignY=25&desc=&descAlign=70.&descAlignY=44&fontColor=fff)

# React 개인과제

![image](https://github.com/user-attachments/assets/53a0dc24-0760-4ed1-9286-e23ade1567b2)

---

## 프로젝트 개요

- 지금까지 배운 내용(React 입문)을 활용하여 2024 파리 올림픽에서 각 나라가 획득한 메달 수 현황을 보여주는 Olympic Medal Table 제작

### 필수 구현 사항

- 제출 폼 UI 구현(국가명, 금, 은, 동메달 수를 입력할 수 있는 폼)
- 메달 집계 CRUD 구현
  - Create: 새로운 나라와 그 나라가 획득한 메달 수 추가
  - Read: 나라별 메달 집계 리스트 화면 구현
  - Update: 기존에 추가된 나라의 메달 수 수정
  - Delete: 나라 정보 삭제
- 정렬: 각 국가의 금메달 수를 기준으로 내림차순 정렬
- 컴포넌트는 자유롭게 구현

### 도전 과제

- 나라 이름을 입력했을 때 이미 등록된 국가라면 alert 메시지를 띄워 사용자에게 알림
- 입력된 국가가 이미 등록된 경우 alert 메시지를 띄워 사용자에게 알림
- 메달 총 개수도 함께 보여주도록 하고 금메달이 아닌, 획득한 메달 총 개수로 정렬
- 로컬스토리지에 입력한 정보를 항상 업데이트 되게끔하고 메달 정보에 관한 useState 의 초기값을 항상 로컬스토리지에서 가져오기

---

## 프로젝트 소개

### 배포 링크

https://hhyuny.github.io/react-olympic/

### 개발환경(기술)

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

<img src="https://camo.githubusercontent.com/9e30e8175154be99e32777c31d5854a0bab39e1caf6e3fa1ef6495d27366fc6f/68747470733a2f2f63646e2e69636f6e2d69636f6e732e636f6d2f69636f6e73322f323130372f504e472f3531322f66696c655f747970655f7673636f64655f69636f6e5f3133303038342e706e67" width="60" height="60">

### 기능 구현 소개 및 소감

#### 과제 제출 질의응답

- JSX 문법이란?
  - JavaScript Extensions. 리액트 컴포넌트가 화면에 나타나는 UI 요소들을 표현할 수 있도록 도와주는 문법(확장된 자바스크립트 문법)
- 사용자가 입력하는 값, 또는 이미 입력된 값, 메달 정보와 같은 애플리케이션의 상태를 관리하기(추가, 변경, 삭제) 위해 리액트의 어떤 기능을 사용했는지?
  - 두 가지 훅을 사용. useState, useRef
- 애플리케이션의 상태 값들을 컴포넌트 간 어떤 방식으로 공유했는지?
  - 상위 컴포넌트에서 필요한 상태 값들을 props로 전달.
- 기능 구현을 위해 불변성 유지가 필요한 부분이 있었다면 하나만 설명
  - 각 나라별 메달 현황을 보관하고 관리하는 state에서 새로운 값이 추가되면 이 state의 함수를 이용해서 데이터를 추가하는 부분
- 반복되는 컴포넌트를 파악하고 재사용할 수 있는 컴포넌트로 분리해봤는지? 그렇다면 어떠한 이점이 있었는지?
  - App, InputBar, NationItem, NationList 이렇게 4가지 컴포넌트로 분리. 각 컴포넌트를 분리함으로써 유지보수성이 좋아지고 필요한 다른 곳에서 또 사용할 수 있는 재사용성 확보.

#### 기능 구현 및 소개

- UI 구현
- 4개의 컴포넌트(App, InputBar, NationItem, NationList)
- 기본적인 CRUD 가능
- 유효성 검사
  - 이미 추가된 국가가 있을 경우 alert 창으로 메세지를 띄우고 추가되지 않도록 처리
  - 국가명을 입력하지 않은 경우 최종 입력이 되지 않도록 처리
- 각 국가의 금메달 수를 기준으로 내림차순 정렬
- 국가명으로 검색할 수 있는 기능 구현
- 추가 및 수정 후 국가명에 자동 포커스
- 입력된 데이터가 하나도 없을 때 테이블을 화면에서 없애고, 사용자가 데이터를 입력하면 테이블을 렌더링 (삼항 연산자 사용 or 논리 && 연산자 사용)
- 메달 합계를 보여주는 Total 항목 추가

---
