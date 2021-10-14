const player ={
    name: "nacho",
    points: 10,
    fat: true,

};
console.log(player);
player.points =player.points +15 ;
console.log(player.po)
console.log("Hello my name is")

// function        argument 매개변수
function  sayHello(nameOfPerson,age){
    console.log("hello my name is " +nameOfPerson + " and I'm "+  age);

}
sayHello("amanda","23세");
sayHello("buck",20);
sayHello("chahu",98);
console.log("lalallal","123")

//plus
function plus (first, second){
    console.log (first + second);
}
plus(8,60);
//plus 값 각 각  first , second에 순서대로  
function divide(a,b){
    console.log (a/b);
}
divide(98,20);
//divide
//NaN = Not a number
/* function 안에서 console.log 로  first or a 호출가능  function {괄호) 밖에서 사용시 적용안됨 */
    function sayHello(){

    }
// Object 밖에선 function sayHello(){ } 으로함  Object 안에서는 아래처럼 작성
    const player = {
        name: "nacho",
        sayHello:function(ohterPersonsName){
            console.log("hello"+ohterPersonsName +" nice to meet you")
        },
    };

    player.sayHello("lynn");
    player.sayHello("lynn");

    // 계산기 
    function plus(a,b){
        console.log(a + b);

    }
    plus(5,5)
    console.warn('경고');
    /*console.log('기본'); console.info('정보'); console.warn('경고'); console.error('에러');*/

    //const 상수 선언시 재선언,재할당 불가능함  
    //ex :const MIN_USER_ID = 100;
//        const MIN_USER_ID = 101;  상수는 선언과 동시에 초기화 되어야함 
//app.js:39 Uncaught SyntaxError: Identifier '상수' has already been declared  재할당 재선언 불가능  재할당 재선언 시  앞에처럼 구문오류 일으킴 
//#2.9 recap  
// var과 let 은 비슷하지만 var  = 틀  var 사용시  let,const 처럼 구분이 불가하게 됨
// const 는 상수 업데이트 불가능!  let은 변수업데이트가능!
//always const , sometimes let , never var !!!
//boolean 은 YES / NO     ON / OFF    TRUE / FALSE 2진법