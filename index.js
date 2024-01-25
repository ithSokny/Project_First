var admins = [{ username: "admin", password: "110503" }];

$(document).ready(()=>{
    $(".btn-login").click(() => {
        let username = $("#username").val();
        let password = $("#password").val();
        let valid = admins.some(e => e.username == username && e.password == password);
        if (valid) {
            location.href = "./First_Project/home.html";
        } else {
            alert("Incorrect Username and password!");
        }
    });
    $("#togglepassword").click(()=>{
        const type =$("#password").attr('type') === 'password' ? 'text' :'password';
        password.setAttribute('type',type);
        $("#togglepassword").toggleClass('fa-eye');
    })
    
})