// write a code to count the vowels from the string 



function countVowels(str){
    let count = 0;
    let vowels = "aeiouAEIOU";
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
    
}

let str = "Elegant elephants enjoy an afternoon adventure, exploring ancient oases under opulent azure skies, observing ornate orangutans amusing themselves atop enormous eucalyptus trees, embracing extraordinary adventures, undeniably euphoric in their unique, idyllic environment."
console.log(countVowels(str));