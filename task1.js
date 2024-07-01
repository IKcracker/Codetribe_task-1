const a = [1,2,3,4,3,2,1,8,15]







let UniqueValue = (a) =>{

for( let i = 0 ; i < a.length ; i++)
{
     
    let removedValue = a.splice(a[i],1);

    for( let k = 0 ; k < a.length ; k++)
    {
        if(removedValue == a[k])
            {
              
              a[k] = 0
               
            }
    }
        

    }
 
    a.forEach(value=> {

        if(value > 0)
          {
              console.log(value)
      
          }
         
      }
      
      )
    
}




UniqueValue(a);

