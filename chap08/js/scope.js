'use strict';
let message = "안녕하세요.";
{ 
    console.log(message);
}
//console.log(message); 지역변수라서 에러
{
    message = "어서오세요.";
    console.log(message);
}
{
    message = "안녕히 가세요.";
    console.log(message);
}