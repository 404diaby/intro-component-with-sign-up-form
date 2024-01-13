


function validateForm() {
  let validForm = true
  let inputs = document.querySelectorAll('#signup input[type=text],input[type=email],input[type=password]');

  inputs.forEach( input => {
    if(input.type === 'email'){
        if (!isValidEmail(input)) {
          input.nextElementSibling.innerHTML = `Looks like this is not an email`; 
          input.classList.add("invalid")
          input.value = input.value
          validForm = false
        }else if (isEmpty(input)) {
           input.nextElementSibling.innerHTML = `${input.placeholder} cannot be empty`; 
           input.classList.add("invalid")
           validForm = false
        }
    }else if (isEmpty(input)) {
      input.classList.add("invalid")
      input.nextElementSibling.innerHTML = `${input.placeholder} cannot be empty`; 
       validForm = false;
    }
  })
return validForm;
}
  

function isEmpty(input) {
  return input.value === "" ? true : false;
}
function isValidEmail(input) {
  let regex =/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(input.value) ? true : false;;
}


let inputs = document.querySelectorAll('#signup input[type=text],input[type=email],input[type=password]');
inputs.forEach( input => {
  if(input.type === 'email'){
      input.addEventListener("input", function (event){
          // Chaque fois que l'utilisateur saisit quelque chose
          // on vérifie la validité du champ e-mail.
          if ( isValidEmail(input)) {
            // S'il y a un message d'erreur affiché et que le champ
            // est valide, on retire l'erreur
            input.nextElementSibling.innerHTML = ""; // On réinitialise le contenu
            input.classList.remove('invalid'); // On réinitialise l'état visuel du message
          }
        },
        false,
      );           
  } 

  input.addEventListener("input", function (event){
        // Chaque fois que l'utilisateur saisit quelque chose
        // on vérifie la validité du champ e-mail.
        if (isEmpty(input) === false) {
          // S'il y a un message d'erreur affiché et que le champ
          // est valide, on retire l'erreur
          input.nextElementSibling.innerHTML = ""; // On réinitialise le contenu
          input.classList.remove('invalid'); // On réinitialise l'état visuel du message
        }
      },
      false,
    );
  
})
 

