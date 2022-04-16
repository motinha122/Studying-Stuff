//Assertion sort

let A = [5,2,4,1,3,6,9,7,8]

for(let j = 1 ; j < A.length ; j++){
    key = A[j]
    let i = j - 1
    while( i >=0 && A[i] > key){
        A[i+1] = A[i]
        i--
    }
    A[i+1] = key
}

console.log(A)