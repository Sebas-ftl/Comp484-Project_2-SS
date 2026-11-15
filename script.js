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
    $('.sleep-button').click(clickedSleepButton);
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {
      name:"My Pet Name", 
      weight:"??", 
      energy:"??",
      happiness:"??"
    };
  
    // treat functionality
    function clickedTreatButton() {
      pet_info.happiness += 3;
      pet_info.weight += 2;
      $(".pet-image").slideUp(200, function() {
        $(".pet-image").attr("src", "images/Darhound_eating.png");
        $(".pet-image").slideDown(200);

        setTimeout(function() {
          $(".pet-image").attr("src", "images/daround.png");
        }, 2000);
      })

      if (pet_info.happiness >= 100) {
        pet_info.happiness = 100;
      }
      checkAndUpdatePetInfoInHtml();
    }
    
    // play functionality
    function clickedPlayButton() {
      if (pet_info.energy-5 <= -1 || pet_info.weight < 30 || pet_info.happiness+4 >= 100) {
        return;
      }
      else {
        pet_info.happiness += 4;
        pet_info.weight -= 2;
        pet_info.energy -= 5;

        $(".pet-image").slideUp(200, function() {
          $(".pet-image").attr("src", "images/Darhound_playing.png");
          $(".pet-image").slideDown(200);

          setTimeout(function() {
            $(".pet-image").attr("src", "images/daround.png");
          }, 2000);
        })
        }
      checkAndUpdatePetInfoInHtml();
    }
    
    // exercise functionality
    function clickedExerciseButton() {
      // Decrease pet happiness
      // Decrease pet weight
      if(pet_info.happiness-7 <= -1 || pet_info.weight < 30 || pet_info.energy-15 <= -1) {
        return;
      }
      else {
        pet_info.happiness -=7;
        pet_info.weight -=8;
        pet_info.energy -=15;
        $(".pet-image").slideUp(200, function() {
          $(".pet-image").attr("src", "images/Darhound_working.png");
          $(".pet-image").slideDown(200);

          setTimeout(function() {
            $(".pet-image").attr("src", "images/daround.png");
          }, 2000);
        })
      }
      
      checkAndUpdatePetInfoInHtml();
    }

    // sleep functionality
    function clickedSleepButton() {
      pet_info.energy = 100;
      $(".pet-image").slideUp(200, function() {
        $(".pet-image").attr("src", "images/Darhound_sleeping.png");
        $(".pet-image").slideDown(200);

        setTimeout(function() {
          $(".pet-image").attr("src", "images/daround.png");
        }, 3000);
      })
      checkAndUpdatePetInfoInHtml();
    }
  
    // update user pet display
    function checkAndUpdatePetInfoInHtml() { 
      updatePetInfoInHtml();
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.energy').text(pet_info['energy']);
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

      // loads into pet object
      pet_info.name = name;
      pet_info.weight = 50;
      pet_info.happiness = 0;
      pet_info.energy = 100;
      updatePetInfoInHtml();

      // shows game screen
      const gamescreen = document.getElementById("game");
      gamescreen.style.display = "block";

    }