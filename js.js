import { getDatabase, ref, set } from "firebase/database";

document.getElementById('contactform').addEventListener('submit',submitForm);

function submitForm(e) {
  e.preventDefault();

  //Get values
  var name = getInputValue('name')
  var email = getInputValue('email')
  var state = getInputValue('state')
  var massage = getInputValue('message')

  //save massage
  saveMessage(name,email,state,message);
}

//function to get value
function getInputValue(id){
    return document.getElementById(id).value;
}


function saveMessage(name, email) {
  const db = getDatabase();
  set(ref(db), {
    username: name,
    email: email,
  });
}
