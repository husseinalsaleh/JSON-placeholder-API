# JSON-placeholder API

# User Posts Viewer

A simple web application that displays users and their posts from JSONPlaceholder API. Users can click on any user to view their posts.

## Features
- Fetches and displays user list
- Shows posts for selected user
- Visual selection highlighting
- Modern Fetch API implementation
- Two implementation approaches included:
  1. Promise-based (.then) version
  2. Async/Await version

## How It Works
1. Fetches users from `https://jsonplaceholder.typicode.com/users`
2. Fetches posts from `https://jsonplaceholder.typicode.com/posts?userId=`
3. Displays users in left panel
4. Shows posts for selected user in main content area
5. Click any user to view their posts and highlight selection
