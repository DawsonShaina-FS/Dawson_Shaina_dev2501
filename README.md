# Connect

Connect is a social media style app that I started building in Module 1 using React and Vite. In Module 2, I added more functionality so users can actually create, edit, and delete posts instead of just viewing them.

## Features

- **Create** - users can add a post with a title, description, and optional avatar
- **Read** - posts show up in the newsfeed after being added
- **Update** - users can go back and edit a post they already made
- **Delete** - users can delete posts they no longer want
- **Form Validation** - the form won't submit if the title or description is empty
- **React Icons** - I used icons for the edit and delete buttons
- **Lifecycle Method** - I used componentDidMount and setTimeout to change the background color after the page loads
- **Styling** - I used styled-components to style the app

## What I Used

- React
- JavaScript
- Vite
- styled-components
- React Icons
- HTML and CSS

## How to Run It

1. Clone the repository
2. Open the project in VS Code
3. Run `npm install` in the terminal
4. Run `npm run dev`
5. Open the localhost link to view the app

## What I Learned

This assignment helped me understand React class components a little better, especially how state works. I also got more practice using map, filter, and the spread operator to add, edit, and remove posts. Some parts were confusing at first, but seeing everything work together helped me understand it more.

## Branch

`02_Application`


## Module 3 - Routing and Hooks

For this assignment, I added React Router to my Connect app so users can switch between the Dashboard, Newsfeed, Messages, and Settings pages.

I also added three charts using Recharts to display sample data for engagement, followers, and posts. I used useState to update the chart data with a refresh button and useEffect to change the page title.

I continued using styled-components for styling and kept the CRUD features from Module 2.


## Module 4 - Advanced JS Functionality

For this assignment, I added a User Profile page that fetches information from the Random User API using async/await and useEffect.

I also used useState to manage the profile data and added a button to generate a new user. For my extra feature, I added a notification dropdown that opens and closes when the bell icon is clicked.

I continued using styled-components for styling.
