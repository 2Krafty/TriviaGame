$(document).ready(function () {

  // this game object holds all of the questions, possible answers, and then the index of the answer answer for each
  var game = {
    questions: [

      {
        question: "Quagmire is often seen saying 'all right' while rocking his?",
        choices: ["Leg", "Arm", "Head", "Foot"],
        answer: [2]
      },
      {
        question: " Quagmire has had sex with at least?",
        choices: ["100 Women", "1000 Women", "500 Women", "1500 Women", "350 Women"],
        answer: [1]
      },
      {
        question: "Who's picture does he have hanging on his closet door?",
        choices: ["Meg", "Brian", "Stewie", "Lois", "Loretta"],
        answer: [3]
      },
      {
        question: "",
        choices: ["Car Salesman", "Piolt", "Banker", "Cop", "Teacher"],
        answer: [1]
      },
      {
        question: "How old is he?",
        choices: ["47", "50", "55", "61", "65"],
        answer: [3]
      },
      {
        question: "Who is he in love with?",
        choices: ["Bonnie", "loretta", "lois", "Meg", "Hookers"],
        answer: [3]
      }
    ]
  }


  var message = ('Game Over!');
var $message = $('#message');
  

  // These events start the timer: set the number of seconds the guesser has 
  var number = 30;
  $('#timeLeft').on('click', run);


  function decrement() {
    // Decrease number by one.
    number--;
    // Show the number in the #timeLeft div.
    $('#timeLeft').html('<h2>' + number + " seconds" + '</h2>');
    // When the number is equal to zero, 
    if (number === 0) {
      // run the stop function.
      stop();
    
     alert('Times Up!')
      $('#message').html('time up!');
      checkAnswers();
    }
  }
  // test
  // writes the win or lose message 
  function writeMessage (){
  // 	// updates the contents of the message div
  	$message.html(message);
   }
  
  function run() {
    counter = setInterval(decrement, 1000);
  }

  // The stop function
  function stop() {
    // Clears our "counter" interval. The interval name is passed to the clearInterval function.
    clearInterval(counter);
  }

  // Execute the run function.
  run();

  // this function dynamically creates the inputs needed for the form and relates them to the
  // items held within the game object 
  function formTemplate(data) {
 
    var qString = "<form id='questionOne'>" + data.question + "<br>";
    // this variable to access the question object's possibles array needed to answer each question
    var possibles = data.choices;
  
   
    for (var i = 0; i < possibles.length; i++) {
      var possible = possibles[i];
      console.log(possible);
      qString = qString + "<input type='radio' name='" + data.id + "' value=" + i + ">" + possible;

    }
    return qString + "</form>";
  }
  window.formTemplate = formTemplate;


  function buildQuestions() {
    var questionHTML = ''
    for (var i = 0; i < game.questions.length; i++) {
      questionHTML = questionHTML + formTemplate(game.questions[i]);
    }
    $('#questions-container').append(questionHTML);

  }

  // function that 
  function isanswer(question) {
    var answers = $('[name=' + question.id + ']');
    var answer = answers.eq(question.answer);
    var isChecked = answer.is(':checked');
    return isChecked;
  }
  // function to build the display of guesser results
  buildQuestions();

  function resultsTemplate(question) {
    var htmlBlock = '<div>'
    htmlBlock = htmlBlock + question.question + ': ' + isChecked;
    return htmlBlock + "</div>";
  }

  // function to tabulate the guesser results
  function checkAnswers() {

    // variables needed to hold results
    var resultsHTML = '';
    var guessedAnswers = [];
    var answer = 0;
    var inanswer = 0;
    var unAnswered = 0

    
    for (var i = 0; i < game.questions.length; i++) {
      if (isanswer(game.questions[i])) {
        answer++;
      } else {
        
        if (checkAnswered(game.questions[i])) {
          inanswer++;
        } else {
          unAnswered++;
        }
      }

    }
    // display the results of the function 
    $('.results').html('answer: ' + answer + "<br>" + 'inanswer: ' + inanswer + "<br>" + 'unanswered: ' + unAnswered);
  }

  // this function checks whether the guesser actually checked an answer for each of the 
  // questions
  function checkAnswered(question) {
    var anyAnswered = false;
    var answers = $('[name=' + question.id + ']');
   
    for (var i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        anyAnswered = true;
      }
    }
    return anyAnswered;

  }

  // create a function with an onclick event for the doneButton that both checks the Answers 
  // and stops the clock when "done" button is pressed
  $('#doneButton').on('click', function () {
    checkAnswers();
    stop();
    $("#messageDiv").html("Game Over!");
  })
});