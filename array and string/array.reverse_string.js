//Create a function to reverse a string from the third command line argument:
//Input 'abcd'
//Output 'dcba

const reverseString = (s) => {
    let arr = s.split('');
    let startArr = 0;
    let endArr = arr.length - 1;
    while (startArr<endArr) {
        let temporary = arr[startArr];
        arr[startArr] = arr[endArr];
        arr[endArr] = temporary;
        startArr++;
        endArr--;
    }
    return arr.join('');
}

//Other versions
// function reverse2(str){
//     //check for valid input
//     if(!str || typeof str != 'string' || str.length < 2 ) return str;
//     return str.split('').reverse().join('');
// }
//
// const reverse3 = str => [...str].reverse().join('');

console.log(reverseString(process.argv[2]))