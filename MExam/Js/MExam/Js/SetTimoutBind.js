//bind
let user = {
    firstname : "길동",
    lastname : "홍"
};

function func1(){
    console.log(this.lastname + this.firstname);
}
function func2(phrase){
    console.log(phrase + ', '+this.lastname + this.firstname);
}
let funcUser1 = func1.bind(user);       //bind메서드 인자로 객체를 넣음
funcUser1();
let funcUser2 = func2.bind(user);
funcUser2("Hello");