# Blog Web Application

A simple blog web application built with Node.js, Express.js, and EJS. Users can create, view, edit, and delete blog posts. Posts are stored in memory and will reset when the server restarts (no database).

## Features

- ✅ **Post Creation**: Create new blog posts with title and content
- ✅ **Post Viewing**: View all posts on the home page
- ✅ **Post Editing**: Edit existing posts
- ✅ **Post Deletion**: Delete posts as needed
- ✅ **Responsive Design**: Works well on both desktop and mobile devices

## Tech Stack

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for routing and middleware
- **EJS**: Templating engine for dynamic HTML

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

Start the server:
```bash
npm start
```

Or use the dev script:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
├── index.js              # Main Express server file
├── package.json           # Node.js dependencies and scripts
├── views/                 # EJS templates
│   ├── index.ejs         # Home page (list all posts)
│   ├── new.ejs           # Create new post form
│   ├── show.ejs          # View single post
│   ├── edit.ejs          # Edit post form
│   └── partials/         # Reusable partials
│       ├── header.ejs    # Site header
│       └── footer.ejs    # Site footer
└── public/               # Static files
    └── styles.css        # Main stylesheet
```

## Usage

1. **View Posts**: Navigate to the home page to see all posts
2. **Create Post**: Click "New Post" button to create a new blog post
3. **Read Post**: Click on a post title or "Read" button to view full post
4. **Edit Post**: Click "Edit" button on any post to modify it
5. **Delete Post**: Click "Delete" button to remove a post

## Notes

- Posts are stored in memory and will be lost when the server restarts
- No database is used in this version
- All styling is handled through CSS in `public/styles.css`
