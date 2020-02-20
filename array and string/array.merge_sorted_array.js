//Merge two increasingly sorted arrays into one sorted array
//@input [1,10,14,50], [2, 3, 14, 24, 27]
//@output [1,2,3,10,14,14,24,27,50]

//O(a+b) with a, b are the length of two arrays

function mergeSortedArr(arr1, arr2) {
    let output = [];
    let index1 = 0, index2 = 0;
    while (index1 < arr1.length || index2 < arr2.length) {
        if (index1 == arr1.length) {
            Array.prototype.push.apply(output, arr2.slice(index2, arr2.length));
            index2 = arr2.length;
            break;
        }

        if (index2 == arr2.length) {
            Array.prototype.push.apply(output, arr1.slice(index1, arr1.length));
            index1 = arr1.length;
            break;
        }

        let a = arr1[index1], b = arr2[index2];

        if (a === b) {
            output.push(a, b);
            index2 ++;
            index1 ++;
        } else if (a <b) {
            output.push(a)
            index1 ++;
        } else {
            output.push(b);
            index2++;
        }
    }

    return output;
}

console.log(mergeSortedArr([1,10,13, 51, 52, 54], [2, 3, 14, 24, 27, 50]));