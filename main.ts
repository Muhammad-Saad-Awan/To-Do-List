#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let dueDate = [];
let time = [];
let condition = true;
while (condition) {
  let todosList = await inquirer.prompt([
    {
      name: "todos",
      type: "input",
      message: "What you want to add in your To-Do List?",
    },
    {
          name:"dueDate",
          type:"input",
          message:"Enter due date for your task (MM/DD/YY)",

    },
    {
         name:"time",
         type:"input",
         message:"Enter Time to complete your task (24-Hours-Format(hrs:sec)) ",
    },

    {
      name: "addMore",
      type: "confirm",
      message: "Do you want to Add more ?",
      default: "false",
    },

  ]);

  todos.push(todosList.todos);
  dueDate.push(todosList.dueDate);
  time.push(todosList.time);
  condition = todosList.addMore;
  console.log(todos);
  console.log(dueDate);
  console.log(time);
}

