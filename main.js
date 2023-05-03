let open=document.getElementById("click");
let close=document.getElementById("btn9");
let pop=document.getElementById("pop");
let Handler1 =function(){
 pop.style.display="block";
}
open.addEventListener('click',Handler1);
 let Handler2=function(){
     pop.style.display="none";
 }
 close.addEventListener('click',Handler2);