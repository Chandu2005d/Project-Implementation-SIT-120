<template>
    <div class="quiz-container">
      <form class="quiz-form" @submit.prevent="showResults">
        <div v-for="(question, index) in questions" :key="index" class="question">
          <h3>{{ index + 1 }}. {{ question.text }}</h3>
          <div class="choices">
            <label v-for="(choice, choiceIndex) in question.choices" :key="choiceIndex" class="choice">
              <input type="radio" :id="`q${index + 1}_${choiceIndex + 1}`" :name="`q${index + 1}`" :value="choice">
              {{ choice }}
            </label>
          </div>
        </div>
        <button class="submit-button" type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        questions: [
          {
            text: "What is the capital of Sri Lanka?",
            choices: ["Colombo", "Kandy", "Galle", "Jaffna"],
          },
          {
            text: "Which body of water surrounds Sri Lanka?",
            choices: ["Indian Ocean", "Arabian Sea", "Bay of Bengal", "Laccadive Sea"],
          },
          {
            text: "What is the predominant religion in Sri Lanka?",
            choices: ["Islam", "Buddhism", "Christianity", "Hinduism"],
          },
          {
            text: "What is the highest mountain in Sri Lanka?",
            choices: ["Pidurutalagala", "Kirigalpotta", "Adam's Peak", "Knuckles Mountain Range"],
          },
          {
            text: "Which is the largest city in Sri Lanka by population?",
            choices: ["Colombo", "Gampaha", "Jaffna", "Kandy"],
          },
          {
            text: "What is the official language of Sri Lanka?",
            choices: ["Sinhala", "Tamil", "English", "All of the above"],
          },
          {
            text: "Which year did Sri Lanka gain independence from British rule?",
            choices: ["1947", "1948", "1950", "1951"],
          },
          {
            text: "What is the famous export product of Sri Lanka?",
            choices: ["Rubber", "Tea", "Textiles", "Electronics"],
          },
          {
            text: "What is the name of the national cricket team of Sri Lanka?",
            choices: ["The Lions", "The Tigers", "The Elephants", "The Jaguars"],
          },
          {
            text: "Which historical site in Sri Lanka is known for its ancient rock fortress?",
            choices: ["Sigiriya", "Anuradhapura", "Polonnaruwa", "Dambulla"],
          },
        ],
      };
    },
  };
  </script>
  
  <style>
  .quiz-container {
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  
  .quiz-form {
    width: 800px;
    background-color: #f9f9f9;
    padding: 20px;
    margin-top: 100px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .question {
    margin-bottom: 20px;
  }
  
  .choices {
    display: flex;
    flex-direction: column;
  }
  
  .choice {
    margin: 5px 0;
  }
  
  .submit-button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  