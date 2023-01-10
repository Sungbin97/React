const number = 1;
const num2 = number;

console.log(num2);

const person = {  
    name: 'Max'
}
// 객체 person은 메모리에 저장되고 상수 person에는 메모리에 있는 주소를 가리키는 포인터 저장
/* const secondPerson = person; // 포인터가 복사됨 
person.name = 'Manu';
console.log(secondPerson); 
*/
// 객체와 배열은 참조형
const secondPerson = {
    ...person // 포인터가 아닌 진짜 복사본 생성
};

person.name = 'Manu';

console.log(secondPerson);