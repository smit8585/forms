
//reference mesage collection
//var messagesRef = ref('messages')

// listen for form Submit
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

// save message to firebase
function saveMessage(name, email, state,message){
  set(ref(detabase),{
    name: name,
    email: email,
    state: state,
    message: message
  });

  console.log("data saved");
}
