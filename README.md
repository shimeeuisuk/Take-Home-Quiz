# 유나엔코스-Take-Home-Quiz

## Description

유나엔코스 과제 - 환율계산기 만들기

## Stack

- Javascript
- React
- Styled-Components

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start
```

## Challenge
1. 데이터 추출

dropbox에 데이터를 넣기위해서 크롤링 작업을 진행했습니다.

```
1.https://www.iban.kr/currency-codes 에서 각 국가별 화폐및 코드 추출 (크롤링)

2. https://api.exchangerate.host/latest 을 이용해서 화폐단위 추출하기 (api 호출)

3. 1번과 2번의 데이터를 비교해서 2번 데이터에 존재하는 국가코드 기준으로 1번 데이터 추출 (javascript으로 비교)
```

2. 컴포넌트 구성
```
src
├── App.jsx
├── apis
│   └── getConvertCurrencyApi.js
├── assets
│   └── countriesData.js
├── components
│   ├── Calculator
│   │   ├── calculator.jsx
│   │   └── style.js
│   ├── Dropbox
│   │   ├── dropbox.jsx
│   │   └── style.js
│   ├── FromBox
│   │   ├── fromBox.jsx
│   │   └── style.js
│   ├── Screen
│   │   ├── screen.jsx
│   │   └── style.js
│   └── ToBox
│       ├── style.js
│       └── toBox.jsx
└── index.js
```
> 환율계산기의 환율 값이 나오는 screen과 국가를 선택하기 위해 dropbox 컴포넌트를 만들었다.

> 환율을 계산할 때 기준이 되는 국가와 환율을 조회할 국가의 환율값과 국가코드 state를 나누어야 했기 때문에 FromBox 컴포넌트와 ToBox 컴포넌트로 나누었다. 그리고, Dropbox, Screen을 자식 컴포넌트로 두고 state를 내려주었다.

> 국가를 선택할 때마다 api 요청을 보내 환율 계산을 해주어야 하므로 Calcultaor 컴포넌트를 최상위에 두고 api 요청을 해주었다.

## last message

읽어주셔서 감사합니다. 너무 재미있는 과제를 받아서 즐겁게 과제를 수행했습니다.
