function validate(){
    var user= document.getElementById('user').value;
    var email= document.getElementById('email').value;
    var pass= document.getElementById('pass').value;
    var confirm= document.getElementById('confirm').value;
    var result=document.getElementById('result');

    result.style.transition= "all 0.5s linear";
    result.setAttribute("class","alert alert-danger p-3 text-center");
    if(user=="" && email=="" && pass=="" && confirm==""){
        result.innerHTML="Please Enter Data";
        return false;
    }else if(user.length <5 || user.length >15){
        result.innerHTML="Enter Username between 5-15 character";
        return false;
    }else if(email.indexOf("@")==-1){
        result.innerHTML="Enter Valid Email";
        return false;
    }else if(pass.length<8){
        result.innerHTML="Enter Password minimum 8 characters";
        return false;
    }else if(pass != confirm){
        result.innerHTML="Please Enter Matched Passwords";
        return false;
    }
}