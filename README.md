# ignite-react-foundations

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Technical Choices](#technical_choices)
- [Issues](#issues)
- [To Do](#todo)

## About <a name = "about"></a>

Revisiting the foundations of React using Vite, React and Typescript.

In this challenge, the developer needs to create a task management application in the style of **to-do list** that includes the following features:

- [x] Create a new task.
- [x] Check and uncheck a task as completed 
- [x] Remove a completed task from the list 
- [x] Display the progress of completed tasks

Despite the fact this is an extremely simple project, it's still a good opportunity to test React concepts like:

- States
- Immutability of the state
- Lists and keys in ReactJS
- Properties
- Componentization

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

To run this project you will need to have Node.js and npm installed on your machine. I personally recommend using some node version manager like [nvm](https://github.com/nvm-sh/nvm) or [n](https://github.com/tj/n). You don't need to install npm separately as it comes with Node.js.

### Installing

A step by step series of examples that tell you how to get a development env running.

First clone the repository:

```bash
git clone git@github.com:ivanseibel/ignite-react-foundations-challenge-2022.git
```
Then install the dependencies:

```bash
npm install
```
And finally run the project:

```bash
npm run dev
```

## Technical Choices <a name = "technical_choices"></a>

- [Vite](https://vitejs.dev/) - A build tool that aims to provide a faster and leaner development experience for modern web projects.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Typescript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
- [CSS Modules](https://vitejs.dev/guide/features.html#css-modules) - A CSS file in which all class names and animation names are scoped locally by default.
- [UUID](https://www.npmjs.com/package/uuid) - A library to generate unique identifiers.
- [Radix UI](https://www.radix-ui.com/) - A collection of accessible, production-ready, and highly customizable UI primitives.

## Issues <a name = "issues"></a>

- [x] When a task is created, the input field is not cleared.

## To Do <a name = "todo"></a>

- [ ] Add an option to move completed tasks to the bottom of the list
- [ ] Allow users to move tasks up and down the list
- [x] Implement responsive design