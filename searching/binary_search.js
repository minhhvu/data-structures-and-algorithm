/*
 Binary Search
 - The binary search is to find an element or the index on the array which is matched the requirement
 - Required a sorted array
 - formula:
   f(start,end) = start + isMatched(arr[mid]) if start === end
                = arr[mid] if isMatched(arr[mid]) === 0
                = f(mid + 1, end) if isMatched(arr[mid]) === 1
                = f(start, mid-1) if isMatched(arr[mid]) === -1
    while mid = Math.floor((start+end)/2)

 Extension for the similar problems:
  f(i,j) = f(i',j') if [i',j'] < [i,j].
 */

//A recursive binary search function
//Find the first index in the array that the value can be inserted there.

const recursiveBinarySearch = (arr, x, start, end) => {
  if (start === end) {
    if (arr[start] >= x) return start
    else return start+1
  }

  const mid = Math.floor((start+end)/2);
  // console.log(start, end,mid, x)

  //When return mid
  if (arr[mid] >= x && x > arr[mid-1]) return mid

  else if (arr[mid] < x) return recursiveBinarySearch(arr, x,mid+1,end )
  else return recursiveBinarySearch(arr, x,start,mid-1 );
}

const arr = [0, 2, 4, 4, 8, 8, 10, 11]
console.log(arr);
console.log('Find 4 in array: ', recursiveBinarySearch(arr, 4, 0, arr.length-1))
console.log('Find 8 in array: ', recursiveBinarySearch(arr, 8, 0, arr.length-1))
console.log('Find 9 in array: ', recursiveBinarySearch(arr, 9, 0, arr.length-1))
console.log('Find 1 in array: ', recursiveBinarySearch(arr, 1, 0, arr.length-1))
