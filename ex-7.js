const employee1 = {
  name: "John",
  age: 20,
};
//ไม่สามารถอ่านค่า undefined.english ได้
//ต้องการเมื่อทำการ console.log() ตัว result1
//จะได้ผลลัพธ์แสดงทางหน้าจอเป็น undefined
employee1.scores = {};
const result1 = employee1.scores.english;
console.log(result1);

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};
//employee2.scores.english เป็นค่า undefined
const result2 = employee2.scores.english ?? "English score is not defined";
console.log(result2);
