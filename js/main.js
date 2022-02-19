var a = prompt("yo'l xaqini kiriting? ($)");
var b = prompt("Mehmonxona to'lovi kiriting? ($)");
var c = prompt("qoshimcha sarf xarajat uchun summa kiriting? (yevro)");
var mony = prompt("Pulingizni kiriting? (so'm)");
console.log(mony);

var x = (a * 10.900);
var y = (b * 10.900);
var z = (c * 12272,64);

const d = Number((x + y + z));

if (mony >= d){
  console.log("Oq yo'l, Alisher!");
}
else{
  console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
}


