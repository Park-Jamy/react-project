// var / const 차이


// var
// 중복 선언 가능 , 위 선언 된 foo를 블럭 안에서도 참조가 가능
var foo = 123;
console.log(foo);

{
    var foo = 456;
}
console.log(foo); 


// const
// 상수화 시킬 때 사용
// 중간 값을 변경하지 못함
// 객체에도 사용이 가능 key : value로 객체 저장 가능

const obj = {id: 123};
const objp = {pw: 456};

const user_ = {
    name : 'devtaco',
    address: {
        city : 'Seoul'
    }
}

console.log(user_);
user_.name = 'PARK';
console.log(user_);
user_.address.city = 'Busan';
console.log(user_);


// 익명 함수, 화살표 함수

// 익명 함수

const fun = function(age: number){
    console.log('age=> ' + age);
    return age;
}

console.log(fun(30));

const test_ = (x : any) => x + x;

console.log(test_(10));
