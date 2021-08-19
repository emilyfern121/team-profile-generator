const inquirer=require("inquirer");
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {

inquirer.prompt([
    {
        type:"input",
        name:"firstName",
        message:"Enter your First Name"
    },
    {
        type:"input",
        name:"title",
        message:"Enter your title"
    },
    {
        type:"input",
        name:"id",
        message:"Enter your id"
    },
    {
        type:"input",
        name:"email",
        message:"Enter your email"
    },
    {
        type:"input",
        name:"officeNumber",
        message:"Enter your Last Name"
    },

]);

};

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<header></header>
<body>
  <div class="container">
    <h1>${answers.name}</h1>
    <h2>${answers.title}</h2>
    <ul class="list-group">
        <li class="list-group-item">ID: ${answers.id}</li>
        <li class="list-group-item">Email: ${answers.email}</li>
        <li class="list-group-item">Office Number: ${answers.officeNumber}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  init();