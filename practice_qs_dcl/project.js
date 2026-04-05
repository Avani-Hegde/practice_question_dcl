 let name = document.getElementById("nam");
let email = document.getElementById("email");
let contact = document.getElementById("con");
let submit = document.getElementById("submit");
let cards = document.querySelector(".cards");

submit.addEventListener("click", function () {

  // remove old borders
  name.style.border = "";
  email.style.border = "";
  contact.style.border = "";

  // check empty fields
  if (name.value === "" || email.value === "" || contact.value === "") {

    alert("Please fill in all fields");

    if (name.value === "") {
      name.style.border = "2px solid red";
    }

    if (email.value === "") {
      email.style.border = "2px solid red";
    }

    if (contact.value === "") {
      contact.style.border = "2px solid red";
    }

    return;
  }

  // contact validation
  if (contact.value.length !== 10 || isNaN(contact.value)) {
    alert("Enter a valid 10 digit contact number");
    contact.style.border = "2px solid red";
    return;
  }

  // success message
  alert("Thank you! Your response has been submitted.");

  // timestamp
  let time = new Date().toLocaleString();

  // card
  let card = `
  <div class="card" style="
      background:#f3f3f3;
      padding:15px;
      margin:10px;
      border-radius:8px;
      box-shadow:0 4px 10px rgba(0,0,0,0.2);
      width:250px;
  ">
      <h3>Name: ${name.value}</h3>
      <h3>Email: ${email.value}</h3>
      <h3>Contact: ${contact.value}</h3>
      <p style="font-size:14px;color:gray;">Submitted: ${time}</p>
  </div>
  `;

  cards.innerHTML += card;

  // clear inputs
  name.value = "";
  email.value = "";
  contact.value = "";
});