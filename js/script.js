// login page start

// saved user mail & password

// user 1 info
const email = 'sifathossainsiam191090@gmail.com';
const password = 123456;



const loginBtn = document.getElementById("loginBtn").addEventListener('click',function(){

const getEmail = document.getElementById('inputEmail3').value;
let getPassword = document.getElementById('inputPassword3').value;
getPassword = parseInt(getPassword);

if(getEmail === email && getPassword === password){
    
    window.location.href = "dashboard/dashboard.html";

}
else{
    document.getElementById('error-text').style.display = "block";
  
  
}

})

// login page end