
function moveZeroes (arr) {
    key = 0
    for (let i = 0; i < arr.length; i ++) {
        if (arr[key] === 0) {
            for (let j = key; j < arr.length - 1; j ++) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        else {
            key ++
        }
    }
    return arr
}

console.log (moveZeroes([0,1,0,3,1,2]))
console.log (moveZeroes([0,0,0,1]))
console.log (moveZeroes([1,1,1,1]))
console.log (moveZeroes([1,1,1,0]))
console.log (moveZeroes([0,1,0,1,0,1,0,1]))
console.log (moveZeroes([]))
console.log (moveZeroes([0]))
console.log (moveZeroes([1]))
console.log (moveZeroes([0,1]))
console.log (moveZeroes([1,0]))