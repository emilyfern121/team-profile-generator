const inquirer=require("inquirer");
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {

    return inquirer.prompt([
    {
        type:"input",
        name:"teamName",
        message:"Enter your team name"
    },
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
        message:"Enter your office number"
    },
    {
        type:"input",
        name:"firstNameTwo",
        message:"Enter team member two's First Name"
    },
    {
        type:"input",
        name:"titleTwo",
        message:"Enter team member two's title"
    },
    {
        type:"input",
        name:"idTwo",
        message:"Enter team member two's id"
    },
    {
        type:"input",
        name:"emailTwo",
        message:"Enter team member two's email"
    },
    {
        type:"input",
        name:"officeNumberTwo",
        message:"Enter team member two's office number"
    },
    {
        type:"input",
        name:"firstNameThree",
        message:"Enter team member three's First Name"
    },
    {
        type:"input",
        name:"titleThree",
        message:"Enter team member three's title"
    },
    {
        type:"input",
        name:"idThree",
        message:"Enter team member three's id"
    },
    {
        type:"input",
        name:"emailThree",
        message:"Enter team member three's email"
    },
    {
        type:"input",
        name:"officeNumberThree",
        message:"Enter team member three's office number"
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
<header class="jumbotron jumbotron-fluid">
  <h1 class="text-center">${answers.teamName}</h1>
</header>
<body>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="text-center">${answers.firstName}</h1>
        <h2 class="text-center">${answers.title}</h2>
        <ul class="list-group">
          <li class="list-group-item">ID: ${answers.id}</li>
          <li class="list-group-item">Email: ${answers.email}</li>
          <li class="list-group-item">Office Number: ${answers.officeNumber}</li>
        </ul>
      </div>
      <div class="col">
        <h1 class="text-center">${answers.firstNameTwo}</h1>
        <h2 class="text-center">${answers.titleTwo}</h2>
        <ul class="list-group">
          <li class="list-group-item">ID: ${answers.idTwo}</li>
          <li class="list-group-item">Email: ${answers.emailTwo}</li>
          <li class="list-group-item">Office Number: ${answers.officeNumberTwo}</li>
        </ul>
      </div>
    <div class="col">
      <h1 class="text-center">${answers.firstNameThree}</h1>
      <h2 class="text-center">${answers.titleThree}</h2>
      <ul class="list-group">
        <li class="list-group-item">ID: ${answers.idThree}</li>
        <li class="list-group-item">Email: ${answers.emailThree}</li>
        <li class="list-group-item">Office Number: ${answers.officeNumberThree}</li>
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