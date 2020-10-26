function validate(){
   
    var name=document.getElementById("name")
//     if(name.value==""){
     
  
//         alert("name field cannot be empty")
//         //document.write("The page cannot be empty")
//         name.focus
//         return false //dont execute submit button
  //  }
    if (name.value==null || name.value=="") { 
        document.getElementById('new').innerHTML = " name field cannot be empty" 
        name.focus
        return false
  } 
  
  
    var email=document.getElementById("email")
//     if(email.value==""){
//         alert("email field cannot be empty")
//         email.focus
//         return false //dont execute submit button
//     }
   if (name.value==null || name.value=="") { 
        document.getElementById('new1').innerHTML = " email field cannot be empty" 
        name.focus
        return false
  } 
  
    var number=document.getElementById("mobile")
    if(number.value==""){
        document.getElementById('new2').innerHTML = " mobile field cannot be empty"
      //alert("mobile number cannot be empty")
      number.focus
      return false //dont execute submit button
    }
    if(number.value.length!=10 || isNaN (number.value)){
       document.getElementById('new2').innerHTML = " Invalid"
       //alert("inavalid number")
      number.focus
      return false //dont execute submit button to not save 
  }
  
  }
  
