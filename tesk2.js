

let makeAnagram = (f_string , s_string)=>{
let k = 0;

  for (let index = 0; index < f_string.length; index++) {
    
   if(s_string.includes(f_string[index]))
    {
        
    }
    else{
    
        k = k + 2;
    }

    
  }
  if(k == 0)
    {
        console.log('the word or phrase is anagrams')
    }
    else{
        console.log(k);
    }
 

}

makeAnagram('cde' , 'cde')