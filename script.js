
// Palindrome_Task
let btn = document.getElementById('button')
let result =document.querySelector('h3')
btn.addEventListener('click', () => {
    const words = ["level", "radar", "text", "river", "madam", "sales", "mom",];
    let sum = 0
    let content=''
    for (let i = 0; i < words.length; i++) {
        if (words[i].split('').reverse().join('') === words[i]) {
            sum++
            console.log(`palindrome ${sum} word ${words[i]}`);
            content+=` ${sum}) ${words[i]} <br>`
        }
    }
    result.innerHTML= content
})


// 2 ci methoddu bu sadece bir string uchundu array uchun calisacam yazim
let word="level"
function isPalidrome(str){
    let left =0;
    let right=str.length-1

    while(left<right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalidrome(word));
