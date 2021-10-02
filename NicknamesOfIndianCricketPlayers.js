var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;

var playerName = readlineSync.question(chalk.cyan('May I have your name? \n'));
console.log(chalk.yellow('\nHello ',playerName,));
console.log(chalk.yellow('Let\'s start the quizzz...\n'));
console.log(chalk.cyan('On NickNames Of indian cricket players\n'));

questionOne = {
  question:"What is Virat Kohli's nickname ? ",
  answer: 'chiku',
}

questionTwo = {
  question:"What is M S Dhoni's nickname ? ",
  answer: 'mahi',
}

questionThree = {
  question:"What is Rohit Sharma nickname ? ",
  answer: 'hitman',
  
}

questionFour = {
  question:"What is Sachin Tendulkar nickname ? ",
  answer: 'god of cricket',
}

questionFive = {
  question:"What is Sourav Ganguly nickame ? ",
  answer: 'dada',
 
}

var quizQuestions =[questionOne,questionTwo,questionThree,questionFour,questionFive];

validation(quizQuestions);


function validation(quizQuestions){
 
for(let i=0;i<5;i++)
{
  var response = readlineSync.question(chalk.red(quizQuestions[i].question));
 
  if(response.toLocaleLowerCase() == quizQuestions[i].answer){
    score++;
     console.log(chalk.green.bold('CORRECT........  \nyourr score.... '+score));
  console.log("\n");
  }
  else{
    score--;
     console.log(chalk.redBright.bold('INCORRECT........  \nyourr score.... '+score));
  console.log("\n");
  }
 
}

console.log(chalk.white.bold(" Your final score.... "+score));
 console.log("\n");
}

var choice = readlineSync.question(chalk.cyan('Want to restart the game(yes/no)? '))

while(choice == 'yes'){
  console.clear();
  console.log("\nHiii ",playerName);
  console.log("Lets Start Again.....!\n\n");
  validation(quizQuestions);
  break;
}