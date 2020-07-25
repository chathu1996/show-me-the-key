function createParagraph(text, className){
   var p = document.createElement("p");
   p.innerText = text;
   if(className){
       p.classList.add(className);
   } 
   return p;
}
console.log(createParagraph("a","letter"));

window.addEventListener("keypress",function(e){
    var oldP =  document.querySelector(".letter");
    if(oldP !== null){
        oldP.parentElement.removeChild(oldP);
    }
    var p = createParagraph(e.key, "letter");
    document.body.append(p);
    
 })

