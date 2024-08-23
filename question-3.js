function reverseNumber(number) {
    let reversed = 0;
    while (number !== 0) {
        reversed = reversed * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    console.log(reversed);
}

 
reverseNumber(234);  
