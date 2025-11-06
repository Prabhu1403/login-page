


document
  .querySelector(".Login_Form")
  .addEventListener("submit", function (event) {
    console.log(event);

    event.preventDefault();
    let User_Name = document.querySelector("#UserName").value.trim();
    let Password = document.querySelector("#Password").value.trim();
    let Cpassword = document.querySelector("#Cpassword").value.trim();
    let Email = document.querySelector("#Email").value.trim();

    let ErrorUser = document.querySelector("#ErrorUser");
    let ErrorPass = document.querySelector("#ErrorPass");
    let ErrorCpassword = document.querySelector("#ErrorCpassword");
    let ErrorEmail = document.querySelector("#ErrorEmail");

    let NamePattern = /^[A-Za-z]+ [A-Za-z]+$/;
    let emailPattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/;
    if (User_Name === "") {
      ErrorUser.innerText = "*Name Is Required";
    } else if (!NamePattern.test(User_Name)) {
      ErrorUser.innerText = "*Enter Your Full Name";
    } else if (NamePattern.test(User_Name)) {
      ErrorUser.innerText = "";
    }

    if (Password === "") {
      ErrorPass.innerHTML = "*Paaword Is Required";
    } else if (Password.length < 3 || Password.length > 10) {
      ErrorPass.innerHTML = "Enter Password 3 to 10";
    } else if (Password.length > 3 || Password.length < 10) {
      ErrorPass.innerHTML = "";
    }

    if (Cpassword === "") {
      ErrorCpassword.innerHTML = "*Conform Password Is Required";
    } else if (Cpassword != Password) {
      ErrorCpassword.innerHTML = "Enter Same Password";
    } else if (Cpassword === Password) {
      ErrorCpassword.innerHTML = "";
    }

    if (Email === "") {
      ErrorEmail.innerHTML = "*Email Is Required";
    } else if (!emailPattern.test(Email)) {
      ErrorEmail.innerHTML = "Enter A Valid Email";
    } else if (emailPattern.test(Email)) {
      ErrorEmail.innerHTML = "";
    }
  });
