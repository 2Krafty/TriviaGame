

var panel = $('#quiz-area');

$(document).on('click', '#start', function(e) {
  game.start();
});

$(document).on('click', '#done', function(e) {
  game.done();
});


var questions = [{
  question: "1 . Quagmire is often seen saying 'all right' while rocking his ?",
  answers: ["Leg", "Arm", "Head", "Foot"],
  correctAnswer: "Head"
}, {
  question: "2 . How many Women has Quagmire had sex with ?",
  answers: ["100 Women", "1000 Women", "600 Women", "350 Women"],
  correctAnswer: "600 Women"
}, {
  question: "3 . Who's picture does he have hanging on his closet door?",
  answers: ["Meg", "Brian", "Lois", "Loretta"],
  correctAnswer: "Lois"
}, {
  question: "4 . What does Quagmire do for a living ?",
  answers: ["Car Salesman", "Piolt", "Police Officer", "Teacher"],
  correctAnswer: "Piolt"
}, {
  question: "5 . How old is Quagmire ?",
  answers: ["47", "50", "55", "61"],
  correctAnswer: "61"
}, {
  question:  "6 . Who's does Quagmire always ask if they're 18 yet ?",
  answers: ["Bonnie", "Chris", "Meg", "Stewie"],
  correctAnswer: "Meg"
}, {
  question: "7 . What type of car does Quagmire drive ?",
  answers: ["57' Chevrolet Bel Air Convertable", "75' Ford LTD Station Wagon" ],
  correctAnswer: "57' Chevrolet Bel Air Convertable"
}, {
  question: "8 . What type of fetish does Quagmire have ?",
  answers: ["leg", "hair", "hand", "foot"],
  correctAnswer: "foot"
}];

var game = {
  correct:0,
  incorrect:0,
  counter:45,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">45</span> Seconds</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }

    panel.append('<button id="done">Done</button>');
  },
  done: function() {


    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('#subwrapper h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }

};