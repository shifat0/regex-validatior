let form = document.querySelector("#form");
let email = document.querySelector("#email");
let phoneNumber = document.querySelector("#p-number");
let postCode = document.querySelector("#post-code");
let select = document.querySelector("#select");
let emailSuccess = document.querySelector("#email-success");
let pnSuccess = document.querySelector("#pn-success");
let pcSuccess = document.querySelector("#pc-success");

select.addEventListener("click", (e) => {
  if (e.target.value === "Email") email.style.visibility = "visible";
  if (e.target.value === "Phone Number")
    phoneNumber.style.visibility = "visible";
  if (e.target.value === "Post Code") postCode.style.visibility = "visible";
});

form.onsubmit = function handleSubmit(e) {
  e.preventDefault();
  let email = document.querySelector("#email").value;
  let phoneNumber = document.querySelector("#p-number").value;
  let postCode = document.querySelector("#post-code").value;

  let emailRegex = /^\S+@\S+\.\S+$/;
  let phoneRegex = /^(\+?88)?01[3-9](\d){8}$/;
  let postRegex = /^[1-9]{4}$/;

  if (email)
    emailRegex.test(email)
      ? (emailSuccess.innerText = "Validated")
      : (emailSuccess.innerText = "Invalid");
  if (phoneNumber)
    phoneRegex.test(phoneNumber)
      ? (pnSuccess.innerText = "Validated")
      : (pnSuccess.innerText = "Invalid");
  if (postCode)
    postRegex.test(postCode)
      ? (pcSuccess.innerText = "Validated")
      : (pcSuccess.innerText = "Invalid");

  if (email === "" && phoneNumber === "" && postCode === "")
    alert("Please select an option");

  if (emailSuccess.innerText === "Invalid") emailSuccess.style.color = "red";
  if (pnSuccess.innerText === "Invalid") pnSuccess.style.color = "red";
  if (pcSuccess.innerText === "Invalid") pcSuccess.style.color = "red";
};
