// import chalk from 'chalk';
const chalk = require('chalk');
const validator = require('validator');
const notes = require('./notes.js');
const yargs = require('yargs');

//customize app version
yargs.version('1.0.1');

//create add command
yargs.command({
  command: 'add',
  descirbe: 'add a new note',
  builder: {
    title: {
      descirbe: 'note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      descirbe: 'Adding the body..',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});
//creating remove command
yargs.command({
  command: 'remove',
  descirbe: 'removing a note',
  handler: function () {
    console.log('removing the note');
  },
});

yargs.command({
  command: 'list',
  descirbe: 'listing the content',
  handler: function () {
    console.log('your notes are..');
  },
});

yargs.command({
  command: 'read',
  descirbe: 'read the notes content',
  handler: function () {
    console.log('reading you notes..');
  },
});
yargs.parse();

///////////////////////////////////////////////////////////////////////
// const msg = notes();
// console.log(msg);

// console.log(validator.isURL('kaithdhruv@gmail.com'));
// console.log(chalk.bold.underline.green('Success'));
// console.log(chalk.inverse.red('fail'));
// console.log(chalk.inverse.cyan('hello'));
// console.log(chalk.yellow('bye'));
