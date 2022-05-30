
function check(str) {
    let count = 0
    for (const strElement of str) {
        if (strElement === `a` || strElement === `u` || strElement === `o` || strElement === `i` || strElement === `e`) {
            count++
        }
    }
    if (count === 0) {
        return false
    } else {
        return count
    }
}
console.log(check(`feuae`));