'use strict';
let group = {
    title: "1모둠",
    students : ["보라", "호진", "지민"],

    showList(){
        this.students.forEach(
            student => console.log(this.title + ": "+student)      //이 this는 showList안이아닌 group의 this를 가져온다.
        );
    }
};
group.showList();