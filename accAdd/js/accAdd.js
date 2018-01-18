function accAdd(arg1, arg2) {
    var r1, r2, m;
    try {
        r1 = arg1.toString().split('.')[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split('.')[1].length;
    } catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    //return (Math.round(arg1 * m) + Math.round(arg2 * m)) / m;
    return (accMul(arg1,m) + accMul(arg2,m)) / m;
}

function accMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    }
    catch (e) {
    }
    try {
        m += s2.split(".")[1].length;
    }
    catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}

console.log('异常的情况：');
console.log(0.1 + 0.2);
console.log(2.01 + 0.01);

console.log('调用精确相加：');
console.log(accAdd(0.1,0.2));
console.log(accAdd(2.01,0.01));

console.log('为什么要在精确相加里面调用精确相乘？');
console.log(2.01 * 100);//
console.log('因为乘法也不是精确的');