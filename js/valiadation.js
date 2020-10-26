function validate(){
   
    var name=document.getElementById("name")
    if(name.value==""){
     
  
        alert("name field cannot be empty")
        //document.write("The page cannot be empty")
        name.focus
        return false //dont execute submit button
    }
  
  
    var email=document.getElementById("email")
    if(email.value==""){
        alert("email field cannot be empty")
        email.focus
        return false //dont execute submit button
    }
    if(email.value==""){
      alert("email field cannot be empty")
      email.focus
      return false //dont execute submit button
  
    }
  
    var number=document.getElementById("mobile")
    if(number.value==""){
      alert("mobile number cannot be empty")
      number.focus
      return false //dont execute submit button
    }
    if(number.value.length!=10 || isNaN (number.value)){
      alert("inavalid number")
      number.focus
      return false //dont execute submit button to not save 
  }
  
  }
  
