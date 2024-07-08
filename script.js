// //https://newsapi.org/v2/top-headlines?country=us&apiKey=5ca19004f97f4f5f9d74d0fbb95b21dc newsAPI 주소

// //https://newsapi.org 도메인 주소
// //v2 API의 버전정보
// //top-headline 디테일 주소 - 앤드 포인트
// //?country=us&apiKey=5ca19004f97f4f5f9d74d0fbb95b21dc 쿼리
// // 쿼리는 Request parameters 에서 자세히 확인 가능
// ///Request parameters 에서 apiKey가 제일 중요 - 요청자 신원 확인
// //country(나라), category(카테고리), sources(작성자), q(키워드), pageSize(페이지 당 받을 응답?), page(페이지)

// //errors
// // 200 - OK. The request was executed successfully.
// // 400 - Bad Request. The request was unacceptable, often due to a missing or misconfigured parameter.
// // 401 - Unauthorized. Your API key was missing from the request, or wasn't correct.
// // 429 - Too Many Requests. You made too many requests within a window of time and have been rate limited. Back off for a while.
// // 500 - Server Error. Something went wrong on our side

const API_KEY = `5ca19004f97f4f5f9d74d0fbb95b21dc`;
let news = [];

const getLatesNews = async () => {
    const url = new URL(`https://https://jjhapi.netlify.app//v2/top-headlines?country=us&apiKey=${API_KEY}`);
    //URL -> 인스턴스 new-만들기
    const response = await fetch(url);
    const data = await response.json();   
    news = data.articles
    console.log("ddd", news);
};
getLatesNews();



// //javascript 기본 원리
// /*
// 자바스크립트는 동기적 프로그래밍이다. -> 위에서 아래로 차례로 실행
// Memory Heap 저장하고 싶은 변수들의 값을 저장해두는 공간
// Call Stack 코드를 실행하는 친구 - 드럼통 Stack(자료형) First in Last out
// 자바스크립트는 싱글 스레드의 단점이 있다.
// */

// console.log(1);
// setTimeout(()=> console.log(2), 5000);
// console.log(3);


// //결과 13 5초후 2
// //브라우저가 스레드를 지원 -> 시간이 필요한 작업을 처리함
// //브라우저가 처리한 작업은 Task Queue에 들어간다.
// // Queue는 자료형의 하나로 가로를 생각 First in First out
// //Task Queue는 브라우저가 처리한 결과를 쌓아 놨다가 눈치를 보면서 Call Stack이 비어있지 않으면
// //처리 결과를 보내지 않는다.
// //브라우저가 스레드를 지원하는 것들을 Web Api라 한다.
// //Task Queue가 눈치 보는 일은 Event loop가 한다.
// console.log("-----------------------------");

// const getNews = () => {
//     let url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
//     //URL -> 인스턴스 new-만들기
//     console.log("uuu", url);
//     const response = fetch(url);
//     console.log("rrr", response);
// }
// getNews();
// for(let i = 0; i<20; i++){
//     console.log("after", i);
// }

// console.log("-----------------------------");


// //async 이 함수를 비동기 처리하겠습니다.
// async function getNews2(){
//     let url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
//     //URL -> 인스턴스 new-만들기
//     console.log("uuu", url);
//     const response = await fetch(url);
//     console.log("rrr", response);
// } // await 애가 실행할 동안 뒤에 거 실행하지 말고 기다려줘
//     // async 전체 함수를 일시정지
// getNews2();
// for(let i = 0; i<20; i++){
//     console.log("after", i);
// }