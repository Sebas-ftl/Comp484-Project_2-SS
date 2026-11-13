// Dont forget to tie in your selected unique elements
// slideUp()
// https://api.jquery.com/slideUp/

// slideDown()
// https://api.jquery.com/slideDown/

// If you wanna repick go here: https://api.jquery.com/

$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {
      name:"My Pet Name", 
      weight:"??", 
      happiness:"??"
    };
  
    function clickedTreatButton() {
      // Increase pet happiness
      // Increase pet weight
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      // Decrease pet weight
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      // Decrease pet weight
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }

    // Hides game
    (function(){
      const div = document.getElementById("game");
      div.style.display = "none";
    }())

    // game start
    function startGame() {
      // hides menu screen
      const menuscreen = document.getElementById("menu");
      menuscreen.style.display = "none";

      // Creates pet with given name or default
      const input = document.getElementById("petName");
      var name = input.value;

      if (name === ""){
        name = "Daround";
      }

      pet_info.name = name;
      pet_info.weight = 50;
      pet_info.happiness = 0;
      updatePetInfoInHtml();

      // console.log(name); testing

      // shows game screen
      const gamescreen = document.getElementById("game");
      gamescreen.style.display = "block";

    }