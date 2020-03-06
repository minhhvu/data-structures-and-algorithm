//Return the first recurring character of an array. Return undefined if there is no recursion

/*Questions:
    - What type of values
    - Range of values
*/

/*
Solution v1: two for loops
O(n^2)
 */

function firstRecurringElementV1(arr) {
    // Initialize the queue array
    let arrNew = [arr[0]];

    //For loop every element from left to right
    for (let i=1; i<arr.length; i++){
        //Check whether the element is repeated
        let recurring = arrNew.find(element => element === arr[i]);
        if (recurring) return arr[i];

        //add the new element to the new array
        arrNew.push(arr[i]);
    }

    return undefined;
}

testing(firstRecurringElementV1);



/*
Solution v2: using hash table from JavaScript
 */

function firstRecurringElement(arr) {
    let map = {};

    for (let i =0; i<arr.length; i++){
        //check whether the value has been added to the map
        if (map[arr[i]] != undefined){
            return arr[i];
        } else {
            map[arr[i]] = i;
        }
    }

    return undefined;
}

testing(firstRecurringElement);

//Testing function
function testing(func){
    console.log('-----Test solution-----');
    a = [1, 20, 34, -45, 20, 23, 435, 123];
    console.log(a);
    console.log('First Recurring Element:', func(a));
    console.log();
    console.log();

    a = [1, 20, 34, -45, 23, 435, 123];
    console.log(a);
    console.log('First Recurring Element:', func(a));
    console.log();
    console.log();

    a = [1, 20, 34, -45, 23, 34, 20, 435, 123];
    console.log(a);
    console.log('First Recurring Element:', func(a));
    console.log();
    console.log();
    console.log();
}