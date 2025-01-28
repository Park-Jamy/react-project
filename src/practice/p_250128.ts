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


// 화살표 함수
const test_ = (x : any) => x + x;

console.log(test_(10));


// indexOf()
// 어떤 특정한 값을 찾기 위해서 사용

const strList : String[] = ["테스트", "인정"];

const isExist = strList.indexOf("테스트") !== -1;
console.log(strList.indexOf("테스트"));
console.log(isExist);

// filter()
// json 객체 중에서 특정한 값만 추출해서 반환시켜주는 함수

const arr_ = [{ "name": "apple", "count": 2 },
    { "name": "orange", "count": 5 },
    { "name": "banana", "count": 16 },
    { "name": "orange", "count": 3 }];

const newArr_ = arr_.filter(function(arrName){
    return arrName.name === "orange";
})

console.log(newArr_);

// map()
// 기존의 배열의 요소들을 하나씩 읽어들여서 계산후 길이가 같은 새로운 배열을 만들어주는 함수
const arr3_ = [6,5,8];

//화살표 함수를 사용해서 간단하게 표시해봅니다.
const test4_ = arr3_.map(x=>x+x);
console.log(test4_);