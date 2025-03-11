const para=document.querySelector("p");
const btn=document.querySelector("button");
// console.log(btn);

btn.addEventListener("click",async ()=>{
    para.innerText="Loading...";
    btn.innerText="UPDATING..";

   try{ 
    const response=await fetch("https://icanhazdadjoke.com",{
        headers:{
            Accept:"application/json",
        },
     });

      const jokes=await response.json();
    //   console.log(jokes);
      setTimeout(() =>{
        para.innerText=jokes.joke;
        btn.innerText="TELL ME A JOKE";
     },1000);
   }

   catch(error){
     para.innerText="Oops! Failed to load a joke. Try again...";
     btn.innerText="TELL ME A JOKE"
      
   }


    // console.log(response);

})