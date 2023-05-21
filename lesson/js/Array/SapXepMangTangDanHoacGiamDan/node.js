// const arr1 = ['a', 'b','c']

// arr1[1] = 'yyyy';

// arr1[3] = 'thu4';

// arr1[arr1.length] = 'last';

// console.log(arr1);

// console.log('=============================');
// for (let i = 0; i < arr1.length; i++) {

//   console.log("Phần tử thứ " , i , arr1[i]);
// }
// console.log('=============================');
// for (let j = arr1.length - 1; j >= 0; j--) {
//   console.log("Phần tử đảo ngược thứ " , j , arr1[j]);
// }

// let arr1 = [['A', 'B','C','D'], ['X', 'Z','G','A']];
// let kq = '';
// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr1[i].length; j++) {
//      kq = kq + "," + arr1[i][j];
//     }
// }
// console.log(kq);

// let value = 10;
// let numbers = [-3, 5, 1, 3, 2, 10];

// let index = numbers.indexOf(value);
// console.log(`In ra index:  ${index}`);

// let numbers = [-3, 5, 1, 3, 2, 10];
// let value = 11;
// var indexFor = -1;
// for (let i = 0; i < numbers.length; i++) {
//   if(value == numbers[i])
//   {
//     indexFor = i;
//   }
// }
// console.log(`In ra indexFor:  ${indexFor}`);


//Sắp xếp mảng tăng dần
let numbers = [5, -3, 1, 3, 2, 10];
let valueTemp = 0;
for (let i = 0; i < numbers.length; i++) {
  for (let j = i+1; j < numbers.length; j++) {
    if (numbers[i] > numbers[j]) {
      valueTemp = numbers[j];  
      numbers[j] = numbers[i];
      numbers[i] = valueTemp;
    }
  }
}
numbers.forEach(m=> console.log(`Kết quả được sắp xếp tăng dần ${m}`));

console.log(`------------------------------------------------`)
//Sắp xếp mảng giảm dần
let numbers2 = [5, -3, 1, 3, 2, 10];
let valueTemp2 = 0;
for (let i = 0; i < numbers2.length; i++) {
  for (let j = i+1; j < numbers2.length; j++) {
    if (numbers2[i] < numbers2[j]) {
      valueTemp2 = numbers2[j];  
      numbers2[j] = numbers2[i];
      numbers2[i] = valueTemp2;
    }
  }
}
numbers2.forEach(m=> console.log(`Kết quả được sắp xếp giảm dần ${m}`));