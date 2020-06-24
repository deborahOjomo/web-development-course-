document.addEventListener('DOMContentLoaded', function() {
  // Your code here...

  // Create a User object with the following properties:
  // - firstName = string
  // - lastName = string
  // - age = integer
  // - occupation = string
  // - address = object, with number, street and city as properties
  // - friends = array
  // - hasCar = boolean
  var user = {
      firstName: 'Deb',
      lastName: 'Johnson',
      age: 20,
      occupation: 'developer',
      address: {
        number: '1',
        street: 'hodwood',
        city: 'London',
               },
      friends: ['amber', 'perry'],
      hasCar: true

  }
  // Using the existing HTML elements, assign each element its respective property from your new object
  // The first one has been done for you

  // BASIC
  // name
  var nameElement = document.getElementById("name"); // referres to the html id no js
  nameElement.innerText = `${user.firstName} ${user.lastName}`;
  
  // age
  var ageElement = document.getElementById("age");
  ageElement.innerText = `${user.age}`;
  // occupation
  var occupationElement = document.getElementById("occupation");
  occupationElement.innerText = `${user.occupation}`;
  // hasCar
  var carElement = document.getElementById("hasCar");
  carElement.innerText = `${user.hasCar}`;
  // INTERMEDIATE
  // address number
  var addressElement = document.getElementById("adrsNumber");
  addressElement.innerText = `${user.address.number}`;
  
  // address street
  var street = document.getElementById("adrsStreet");
  street.innerText = `${user.address.street}`;
  // address city
  var city = document.getElementById("adrsCity");
  city.innerText = `${user.address.city}`;
  // ADVANCED
  // loop through the friends and append each one onto the correct element

})