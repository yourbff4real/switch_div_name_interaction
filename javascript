  var eleDiv1= document.getElementById("div1");
  var eleDiv2=document.getElementById("div2");

function functionText(){
 
  
   
  var textBuffer1 = eleDiv1.innerHTML;
  var textBuffer2 = eleDiv2.innerHTML;
  
  eleDiv1.innerHTML=textBuffer2;
  eleDiv2.innerHTML=textBuffer1;
  
}

  eleDiv1.className="blueClass";
  eleDiv2.className="yellowClass";

function functionColor(){
  
  var classBuffer1 =  eleDiv1.className;
  var classBuffer2 =  eleDiv2.className;
  
  eleDiv1.className= classBuffer2;
  eleDiv2.className= classBuffer1;
}
