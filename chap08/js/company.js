'use strict';
let company = {
    sales :[{name : 'John', salary : 1000}, {name : 'Alice', salary:1600}],
    develoment: {
        sites:[{name : 'Peter', salary:2000}, {name:'Alex', salary:1800}],
        internals : [{name : 'Jack', salary : 1300 }]
    }
};
//급여 합계를 구해주는 함수
function sumSalaries(department){
    if(Array.isArray(department)){
        //배열의 요소를 합함
        //educe() 메서드는 배열 요소마다 함수를 호출해 누적된 값을 구할 수 있는 메서드이다.
        return department.reduce((prev, current) => prev+current.salary,0);
    }else{
        let sum = 0;
        for(let subdep of Object.values(department)){
            sum+=sumSalaries(subdep);
        }
        return sum;
        }
    }
    console.log(sumSalaries(company));
