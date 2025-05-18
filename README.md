# Task Manager - React Todo List Application

A modern, feature-rich task management application built with React that allows you to organize tasks by categories.

![Task Manager Screenshot](react-app\src\img.png)

## Features

- ✅ Create and manage tasks with categories
- 🔍 Search functionality to quickly find tasks
- 📋 Two view modes: Category view and List view
- 🎨 Visual task categorization with color coding
- ✓ Mark tasks as complete with visual indicators
- 🗑️ Delete tasks you no longer need
- 💾 Tasks are saved in local storage, persisting between sessions

## Setup and Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/To-Do-List.git
   cd To-Do-List/react-app
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Application Structure

The application is built with the following React components:

- `App.js` - Main component managing state and data flow
- `header.js` - Displays the application title
- `additem.js` - Form for adding new tasks with categories
- `searchitem.js` - Search functionality for filtering tasks
- `main.js` - Displays tasks in either category or list view
- `footer.js` - Displays the copyright information

## How to Use

1. **Adding a Task**:
   - Select a category from the dropdown (General, Work, Home, Study, etc.)
   - Enter your task description
   - Click "Add" or press Enter

2. **Completing a Task**:
   - Click the checkbox next to a task to mark it as complete

3. **Deleting a Task**:
   - Click the delete button (trash icon) to remove a task

4. **Searching Tasks**:
   - Type in the search box to filter tasks by their content

5. **Switching Views**:
   - Toggle between "Categories" and "List" views using the buttons at the top

## Task Categorization

Tasks are categorized using the format: `"Category: Task description"`. 

The application supports these default categories:
- General
- Work
- Home
- Study
- Personal
- Shopping
- Health

## Build for Production

When you're ready to deploy the application:

```
npm run build
```

This creates a `build` directory with optimized production files.
