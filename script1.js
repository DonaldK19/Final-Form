function validate() {

  var checkedItems = document.getElementsByClassName('checkBoxvalues');
  var flag = 0;
  for (let index = 0; index < checkedItems.length; index++) {
    if (checkedItems[index].checked == true) {
      flag++;
    }
  }
  if (flag == 2) {
    
  } else {
    console.log('error');
  }
  


  const form = document.getElementById('form');
  var firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmpassword = document.getElementById('confirmpassword').value;
  const Gender1 = document.getElementById('Gender1').checked;
  const Gender2 = document.getElementById('Gender2').checked;
  const hobbies1 = document.getElementById('hobbies1');
  const hobbies2 = document.getElementById('hobbies2');
  const hobbies3 = document.getElementById('hobbies3');
  const hobbies4 = document.getElementById('hobbies4');
  const income = document.getElementById('range1').value;
  const photo = document.getElementById('img').value;
  // alert(photo);
  const bio = document.getElementById('text').value;
  const years = document.getElementById('age').value;

  const isEmail = (email) => {
    var atSymbol = email.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = email.lastIndexOf(".");
    if (dot <= atSymbol + 2) return false;
    if (dot == email.length - 1) return false;
    return true;

  }

  if (firstname == "") {
    document.getElementById('sfirst').innerHTML = "*field required";
    return false;
  }
  if (firstname.length <= 2) {
    document.getElementById('sfirst').innerHTML = "*First Name Minimum 3 Characters";
    return false;
  }
  if (!isNaN(firstname)) {
    document.getElementById('sfirst').innerHTML = "*Please Enter Alphabets Only";
    return false;
  }



  if (lastname == "") {
    document.getElementById('slast').innerHTML = "*field required";
    return false;
  }
  if (lastname.length <= 2) {
    document.getElementById('slast').innerHTML = "*Last Name Minimum 3 Characters";
    return false;
  }
  if (!isNaN(lastname)) {
    document.getElementById('slast').innerHTML = "*Please Enter Alphabets Only";
    return false;
  }


  if (email == "") {
    document.getElementById('semail').innerHTML = "*please enter email field";
    return false;
  }
  if (!isEmail(email)) {
    document.getElementById('semail').innerHTML = "*Not a valid email";
  }

  if (password == "") {
    document.getElementById('spassword').innerHTML = "*please enter password field";
    return false;
  }

  if (password.length < 8) {
    document.getElementById('spassword').innerHTML = "Minimum 8 Characters required";
    return false;
  }

  if (confirmpassword == "") {
    document.getElementById('sconfirmpassword').innerHTML = "*please enter confirmpassword";
    return false;
  }

  if (password != confirmpassword) {
    document.getElementById('sconfirmpassword').innerHTML = "*Password Are Not Matching";
    return false;
  }

  if (!Gender1 && !Gender2) {
    document.getElementById('sgender').innerHTML = "*select one option";
    return false;
  }



  if (!hobbies1.checked || !hobbies2.checked && !hobbies3.checked && !hobbies4.checked) {
    document.getElementById('hobbies').innerHTML = "*select hobbies";
    return false;
  }

  if (income == 0) {
    document.getElementById('num1').innerHTML = "*select income";
  }


  if (!photo) {
    document.getElementById('simg').innerHTML = "*please upload file";
  }

  if (!bio) {
    document.getElementById('sbio').innerHTML = "*write bio";
  }

  if (years < 18) {
    document.getElementById('sage').innerHTML = "*Age should be greater than 18";
  }





}


function passwordcheck() {
  var password = document.getElementById("password").value;
  var strong = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

  if (password == "") {
    document.getElementById('spassword').innerHTML = "*password field";
    return false;
  }
  if (password.length < 5) {
    document.getElementById('spassword').innerHTML = "*password length sould be grater than 5";
    return false;
  }
  if (password.length > 8) {
    document.getElementById('spassword').innerHTML = "*password length sould be less than 9";
    return false;
  }

  if (!password.match(strong)) {
    document.getElementById('spassword').innerHTML = "*password is not strong";
    return false;
  }
}
