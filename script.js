let imagebox=document.getElementById("imagebox");
let qrimg=document.getElementById("qrimg");
let qrtext=document.getElementById("qrtext")
function generateqr()
{ 
   if(qrtext.value.length>1)
   {
   qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value; 
   imagebox.classList.add("show-image");
   } 
   else{
       alert("you should enter ant text or url");
   }

}