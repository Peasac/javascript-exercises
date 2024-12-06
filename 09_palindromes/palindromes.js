const palindromes = (a) => {
    let ab = a.toLowerCase();
    ab = Array.from(ab).filter((letter) => /[a-zA-Z0-9]/.test(letter)).join("");
    console.log(ab);
    let rev = Array.from(ab).reverse().join("");
    console.log(rev);
    return rev === ab;
}


    


// Do not edit below this line
module.exports = palindromes;
