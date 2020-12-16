function romanNumeralConverter(num) {
    var roman = "";
    var romanNumerals = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "M"];
    var arabicNumeralValues = [1,4,5,9,10,40,50,90,100,400,500,900,1000]; // there are 13 elements in each array
    for (var i = arabicNumeralValues.length - 1; i >= 0; i--){
        while(num >= arabicNumeralValues[i]){
        roman = roman + romanNumerals[i];
        num = num - arabicNumeralValues[i];
        }
    }

    return roman;
};

console.log(romanNumeralConverter(3));