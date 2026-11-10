# React Fragments – Experiment 09

A simple student profile interface built with React and Vite to demonstrate **React Fragments**.

## Features
- Groups multiple JSX elements with `<>...</>` without adding an extra DOM element.
- Student profile card with academic details.
- Responsive layout and custom CSS styling.

## Requirements
- Node.js and npm

## Run locally
```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Build
```bash
npm run build
```

## Main concept
The `Student` component returns multiple sibling elements using a React Fragment. The Fragment groups them without creating an additional wrapper element in the DOM.
