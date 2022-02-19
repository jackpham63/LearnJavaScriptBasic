// A. Tim hieu ham Number
var a = "7.5"; //parsefloat
var b = "7"; //parseInt
// Number(value)
console.log(Number(a));
console.log(Number(b));
console.log(Number("abc")); //NaN: Not a Number
console.log(Number(null));
console.log(Number(false));
console.log(Number(""));
// falsy value
console.log(Number(true));

// B. Tim hieu ham String
console.log(String(a));

// C. Tim hieu ve Boolean
console.log(`Boolean of: ${Boolean(0)}`);
console.log(`Boolean of: ${Boolean("")}`);
console.log(`Boolean of: ${Boolean(null)}`);
console.log(`Boolean of: ${Boolean(undefined)}`);
console.log(`Boolean of: ${Boolean(NaN)}`);

// D.  Coercion
console.log(10 + 1);
console.log(10 + "10");
// 10 -> "10" + "10" -> "1010"
//console.log(String(10) + "10")

//Toan tu ss :  &&  ||
console.log(5 > 7 && 8 > 3); //false
console.log(5 > 7 || 8 > 3); //true

const amIWrong = true;
console.log(!amIWrong); //false

// == loose equality vs === strict equality
console.log(10 == "10"); // "10" == "10"
console.log(true == 1); //Number(true) = 1 -> 1 = 1 -> true
console.log(1 == "01"); // Number("01") -> 1 -> 1 == 1 -> true

console.log(typeof 10); //Number
console.log(typeof "10"); //String
console.log(10 === "10"); //False

// Dieu kien
const isRich = true;
const myMoney = 1000;
if (!isRich) {
  console.log("I will buy a new car");
} else if (myMoney > 1000) {
  console.log("I will give you some money");
} else {
  console.log("I am poor");
}

//prompt, confirm, alert
// alert("Hello I am Phuoc PhamTran")
const yourName = prompt("Vui long nhap ho va ten cua ban", "");
console.log(yourName);

// example 01
const yourAge = prompt("Vui long nhap vao so tuoi cua ban", "");
console.log(typeof yourAge);
let message = "";
if (Number(yourAge) >= 18) {
  message = "Ban co the thi bang lay xe";
}
alert(message);

// example 02
const a = 5;
const b = 5;
if (a > b) {
  alert(` so lon hon la so ${a}`);
} else if (a < b) {
  alert(` so lon hon la so ${b}`);
} else {
  alert("khong co so nao lon hon so nao ca !!!");
}
