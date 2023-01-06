
const pera=document.querySelector(".cata")
console.log(pera);
window.addEventListener("scroll",function(){
    console.log(window.scrollY);    
        if(window.scrollY>350){
            pera.classList.add("active")
            console.log("elll");
        }
        else{
            pera.classList.remove("active")
            
        }
})
