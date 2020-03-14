module.exports = function reverse (n) {
    let str = n.toString().split("").reverse().join("");
    return parseInt(str);     
}
