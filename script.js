// Quiz data in JSON format
var quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "London", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci"
    }
  ];
  
  var currentQuestion = 0; // Variable to keep track of the current question
  
  // Function to load the question and options
  function loadQuestion() {
    var questionElement = document.getElementById('question');
    var optionsElement = document.getElementById('options');
    var submitButton = document.getElementById('submit');
  
    // Clear previous question and options
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
  
    // Display the current question
    questionElement.textContent = quizData[currentQuestion].question;
  
    // Display the options for the current question
    var options = quizData[currentQuestion].options;
    for (var i = 0; i < options.length; i++) {
      var option = document.createElement('input');
      option.type = "radio";
      option.name = "answer";
      option.value = options[i];
      optionsElement.appendChild(option);
  
      var label = document.createElement('label');
      label.textContent = options[i];
      optionsElement.appendChild(label);
  
      optionsElement.appendChild(document.createElement('br'));
    }
  
    // Show or hide the submit button based on the current question
    if (currentQuestion === quizData.length - 1) {
      submitButton.textContent = "Finish";
    } else {
      submitButton.textContent = "Next";
    }
  }
  
  // Function to handle the submit button click
  function handleButtonClick() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    
    // Check if an option is selected
    if (!selectedOption) {
      alert("Please select an option.");
      return;
    }
  
    // Check if the selected option is correct
    var answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      alert("Correct answer!");
    } else {
      alert("Wrong answer. The correct answer is: " + quizData[currentQuestion].answer);
    }
  
    // Move to the next question or finish the quiz
    if (currentQuestion === quizData.length - 1) {
      alert("Quiz finished. Thank you!");
      location.reload(); // Reload the page to start over
    } else {
      currentQuestion++;
      loadQuestion();
    }
  }
  
  // Load the initial question
  loadQuestion();
  
  // Add event listener to the submit button
  var submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', handleButtonClick);
  