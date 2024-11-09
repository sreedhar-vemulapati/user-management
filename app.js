
let users = [];

function renderUsers() {
  let userContainer = document.getElementById("userContainer");
  userContainer.innerHTML = "";
  users.forEach((user) => {
    let div = document.createElement("div");
    let name = document.createElement("p");
    let email = document.createElement("p");
    div.classList.add("user");
    name.innerText = user.name;
    email.innerText = user.email;
    if (user.email) div.appendChild(name);
    div.appendChild(email);
    userContainer.appendChild(div);
  });
}
/*function emailExist(email){
   let user=users.filter((user)=>{
   return user.email==email
   })
   return user.length>0?true:false
}*/
function emailExist(email) {
  return users.some((user) => user.email == email);
}
function addUser() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  if(!name ||!email){
    alert("enter name and email")
    return
  }
  let user = {
    name: name,
    email: email,
  };
  
  if (emailExist(email)) {
    let audio=document.getElementById("audioAlert")
    audio.play()
    let alert = document.getElementById("alert");
    alert.classList.add("alert");
    alert.style.display = "block";
    alert.innerText = "email already exist !!";
    return;
  } else {
    let confirm = document.getElementById("alert");
    confirm.classList.add("confirm");
    confirm.style.display = "block";
    confirm.innerText = "user added succussfully";
    setTimeout(function () {
      confirm.classList.remove("confirm");
      confirm.style.display = "none";
    }, 1000);
  }
  users.push(user);
  renderUsers();
}