const wordsTextarea=document.querySelector(".container .words");
const countBtn=document.querySelector(".container .count-btn");
const wordcount=document.querySelector(".container .word-count span");
const countwords=()=>{
    let words=wordsTextarea.value;
    let splitwords=words.split(" ");
    console.log(splitwords);
    let numberOfWords=splitwords.length;

    wordcount.innerHTML=numberOfWords;
};
countBtn.addEventListener("click",countwords)
