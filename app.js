// จงเขียน Funtion ที่ return ค่าเป็นตัวอักษรตัวสุดท้ายของ string
function lastChar(word) {
    let lastW = word.slice(-1)
    return lastW;
}

console.log(lastChar('god') + ' : god');
console.log(lastChar('winter') + ' : winter');
console.log(lastChar('fine') + ' : fine');
console.log(lastChar('easy') + ' : easy');