'use strict';
// 1초 간격으로 출력
function fromTo(from, to) {
    let current = from; //처음을 넣어줌
  
    let timerId = setInterval(function() { //setInterval 선언함수로 작성
      console.log(current);  //찍기
      if (current == to) {
        clearInterval(timerId);  //현재와 to가 같다면 스크립트 종료후 멈춤
      }
      current++;
    }, 1000);
  }
  

  fromTo(5, 10);





