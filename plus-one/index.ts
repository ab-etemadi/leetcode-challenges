function plusOne(digits) {
    let num = BigInt(digits.join(''));

    return String(++num).split('').map(Number);
};