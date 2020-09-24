function functionText(){
 
  
  var eleDiv1= document.getElementById("div1");
  var eleDiv2=document.getElementById("div2");
  
   
  var textBuffer1 = eleDiv1.innerHTML;
  var textBuffer2 = eleDiv2.innerHTML;
  
  eleDiv1.innerHTML=textBuffer2;
  eleDiv2.innerHTML=textBuffer1;
  
}
