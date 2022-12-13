// index.js

// express 모듈 추가
const express = require('express')
const app = express();

//라우터 : get 요청
app.get('/', (요청, 응답) => {
    // 응답.send('home으로 접속'); 간단한 메세지같은거 보낼때
    // 파일전체를 보낼때 !! 경로 조심해서 쓰기 !!
    응답.sendFile(__dirname + '/pages/index.html')
});

// about 홈페이지 요청
app.get('/about', (요청2, 응답2) => {
    응답2.sendFile(__dirname + '/pages/about.html')
})

// coffee 홈페이지 요청
app.get('/coffee', (req, res) => {
    res.sendFile(__dirname + '/pages/coffee.html');
})

// 포켓몬 이름, 이미지 주소, 번호 나오게
const pokemons = [
    // 이상해씨
    'https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000101.png',
    // 메가리자몽x
    'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000602.png',
    // 어니부기
    'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000801.png',
]

const pokemonsName = ['이상해씨', '메가리자몽X', '어니부기']

// pokemon 요청
app.get('/pokemon/:id', (req, res) => {
    // params는 클라이언트 요청 변수값
    console.log(req.params)
    // 포켓몬 이름, 이미지 주소, 번호 나오게
    res.send(`
    <img
    src = '${pokemons[req.params.id]}' 
    alt = '${req.params.id}' />
    <h1>${pokemonsName[req.params.id]}</h1>
    <p>${req.params.id}</p>
    `)
})

// 서버 오픈
app.listen(3000, function(){
    console.log(`서버가 열림`)
});

