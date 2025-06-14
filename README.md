# Task Tracker App

A modern, single-page task management application built with React, Vite, and Tailwind CSS. This app allows users to manage tasks. The tasks persist in localStorage for seamless use.

## Features
- **Task Management**:
  - Add tasks with a required title and optional description.
  - Toggle task completion status.
  - Delete tasks.
  - Filter tasks by All, Completed, or Incomplete.
  - Check the progress of tasks with a visual progress bar.
- **Persistence**: Tasks are saved in localStorage for cross-session continuity.

## Tech Stack
- **React**: Component-based UI with hooks for state management.
- **Vite**: Fast build tool for development and production.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Lucide-Icons**: SVG icons for buttons and empty state.
- **LocalStorage**: Browser storage for task persistence.

## Folder Structure
task-tracker-app/
├── public/
│   ├── favicon.ico            # Default favicon
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx      # Form for adding tasks with title, description, and validation
│   │   ├── TaskList.jsx      # Scrollable list of tasks with empty state
│   │   ├── TaskItem.jsx      # Individual task with toggle and delete actions
│   │   ├── FilterButton.jsx  # Buttons for filtering tasks (All, Completed, Incomplete)
│   ├── hooks/
│   │   ├── useTask.js       # Custom hook for task state and logic
│   ├── utils/
│   │   ├── taskUtil.js      # Utility functions for filtering and sorting tasks
│   ├── App.jsx               # Main component with layout 
│   ├── index.css            # Tailwind directives
│   ├── main.jsx             # React entry point
├── index.html               # HTML entry point and made changes for the apps title and icon
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
├── vite.config.js           # Vite configuration with React and Tailwind plugins

## Installation On Local Machine
### Quick Setup
1. **Clone** the repository:
   ```bash
   git clone <repository-url>
   cd task-tracker-app
  
2. **Install dependencies**:
    ```bash
    npm install
    ```
3. **Run the development server**:
    ```bash
    npm run dev
    ```
4. **Open your browser** and navigate to `http://localhost:5173` to view the app.  


