var premierM = document.getElementById("premierM");
var deuxiemeM = document.getElementById("deuxiemeM");
var troisiemeM = document.getElementById("troisiemeM");
var quatriemeM = document.getElementById("quatriemeM");
var premierP=document.getElementById("premierP");
var deuxiemeP=document.getElementById("deuxiemeP");
var troisiemeP=document.getElementById("troisiemeP");
var quatriemeP=document.getElementById("quatriemeP");
;
var btnP =document.querySelectorAll(".btnP");
var counter1=document.getElementById("counter1");
var counter2=document.getElementById("counter2");
var counter3=document.getElementById("counter3");
var counter4=document.getElementById("counter4");
var heart=document.getElementById("heart");
 
let prixU1=document.getElementById('prixU1');
let prixU2=document.getElementById('prixU2');
let prixU3=document.getElementById('prixU3');
let prixU4=document.getElementById('prixU4');
let total=document.getElementById('totPrice');
// console.log(total);
let delete1=document.getElementById('delete1');
let delete2=document.getElementById('delete2');
let delete3=document.getElementById('delete3');
let delete4=document.getElementById('delete4');
let totalg=0;
    
premierM.addEventListener("click",function Moins() {  
      
     if(premierM.nextElementSibling.innerText>0){
        
        premierM.nextElementSibling.innerText--;
        
        totalg=(prixU1.innerHTML*counter1.innerHTML);
        console.log(totalg);
        total.innerHTML = totalg+"Dinars";
    }
    })   
  premierP.addEventListener("click",function Plus() {          
        premierP.previousElementSibling.innerText++;
        
        totalg+=(prixU1.innerHTML*counter1.innerHTML);
    
        
        total.innerHTML = totalg+"Dinars";
        
        })   
        deuxiemeM.addEventListener("click",function Moins() {  
      
            if(deuxiemeM.nextElementSibling.innerText>0){
               
                deuxiemeM.nextElementSibling.innerText--;
        
                totalg=(prixU2.innerHTML*counter2.innerHTML);
                console.log(totalg);
                total.innerHTML = totalg+"Dinars";
           }
           })   
           deuxiemeP.addEventListener("click",function Plus() {          
              
            deuxiemeP.previousElementSibling.innerText++;
        
            totalg+=(prixU2.innerHTML*counter2.innerHTML);
        
            
            total.innerHTML = totalg+"Dinars";
           
            
               })   
               
               troisiemeM.addEventListener("click",function Moins() {  
      
            if(troisiemeM.nextElementSibling.innerText>0){
               
                troisiemeM.nextElementSibling.innerText--;
        
                totalg=(prixU3.innerHTML*counter3.innerHTML);
                console.log(totalg);
                total.innerHTML = totalg+"Dinars";
           }
           })   
           troisiemeP.addEventListener("click",function Plus() {          
              
            troisiemeP.previousElementSibling.innerText++;
        
            totalg+=(prixU3.innerHTML*counter3.innerHTML);
        
            
            total.innerHTML = totalg+"Dinars";
               
               })   
               
               quatriemeM.addEventListener("click",function Moins() {  
      
            if(quatriemeM.nextElementSibling.innerText>0){
               
                quatriemeM.nextElementSibling.innerText--;
        
                totalg=(prixU4.innerHTML*counter4.innerHTML);
              
                total.innerHTML = totalg+"Dinars";
           }
           })   
           quatriemeP.addEventListener("click",function Plus() {          
              
            quatriemeP.previousElementSibling.innerText++;
        
            totalg+=(prixU4.innerHTML*counter4.innerHTML);
        
            
            total.innerHTML = totalg+"Dinars";
               
               })   
              

var L = true
heart.addEventListener("click",function like(){

   if(L==true){
    heart.style.color="red";
    L=!L;
   }
   else {

    heart.style.color="grey";
    L=!L;
   }
})


var L2 = true
heart2.addEventListener("click",function like(){

   if(L2==true){
    heart2.style.color="red";
    L2=!L2;
   }
   else {

    heart2.style.color="grey";
    L2=!L2;
   }
})

var L3 = true
heart3.addEventListener("click",function like(){

   if(L3==true){
    heart3.style.color="red";
    L3=!L3;
   }
   else {

    heart3.style.color="grey";
    L3=!L3;
   }
})

var L4 = true
heart4.addEventListener("click",function like(){

   if(L4==true){
    heart4.style.color="red";
    L4=!L4;
   }
   else {

    heart4.style.color="grey";
    L4=!L4;
   }
})

// function totalPrice(){

// total.innerText=(prixU1.innerText*counter1.innerText);

// }
// console.log(prixU1.innerText);
// console.log(counter1);
// console.log(counter1.innerText);
// console.log(totalPrice());
delete1.addEventListener("click",function del() {
    delete1.parentElement.parentElement.remove()
})
delete2.addEventListener("click",function del() {
    delete2.parentElement.parentElement.remove()
})
delete3.addEventListener("click",function del() {
    delete3.parentElement.parentElement.remove()
})
delete4.addEventListener("click",function del() {
    delete4.parentElement.parentElement.remove()
})
var phrase="Each character will be treated separately.";
var  i,j ;
var nbc=0;
for(i=0;i<phrase.length;i++)
{

    nbc=nbc+i;

}
console.log(nbc);