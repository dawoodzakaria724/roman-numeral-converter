function romanNumeralConverter(num) {
    var roman = "";
    var romanNumerals = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", 
    "M", "MV\u0305", "V\u0305", "MX\u0305", "X\u0305", "X\u0305L\u0305", "L\u0305", "X\u0305C\u0305", 
    "C\u0305", "C\u0305D\u0305", "D\u0305", "C\u0305M\u0305", "M\u0305"];
    var arabicNumeralValues = [1,4,5,9,10,40,50,90,100,400,500,900,1000,4000,5000,9000,10000,40000,50000,
        90000,100000,400000,500000,900000,1000000]; // there are 13 elements in each array
    for (var i = arabicNumeralValues.length - 1; i >= 0; i--){
        while(num >= arabicNumeralValues[i]){
        roman = roman + romanNumerals[i];
        num = num - arabicNumeralValues[i];
        }
    }

    return roman;
};

console.log(romanNumeralConverter(500123));