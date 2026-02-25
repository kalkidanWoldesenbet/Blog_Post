const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory posts (no DB)
let posts = [];
let nextId = 1;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Home: list posts
app.get("/", (req, res) => {
  const sorted = [...posts].sort((a, b) => b.createdAt - a.createdAt);
  res.render("index", { posts: sorted });
});

// New post form
app.get("/posts/new", (req, res) => {
  res.render("new");
});

// Create post
app.post("/posts", (req, res) => {
  const title = (req.body.title || "").trim();
  const content = (req.body.content || "").trim();

  if (!title || !content) {
    return res.status(400).send("Title and content are required.");
  }

  const post = {
    id: String(nextId++),
    title,
    content,
    createdAt: new Date(),
  };

  posts.push(post);
  res.redirect("/");
});

// View post
app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);
  if (!post) return res.status(404).send("Post not found.");
  res.render("show", { post });
});

// Edit form
app.get("/posts/:id/edit", (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);
  if (!post) return res.status(404).send("Post not found.");
  res.render("edit", { post });
});

// Update post (POST to keep it simple; no method-override needed)
app.post("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);
  if (!post) return res.status(404).send("Post not found.");

  const title = (req.body.title || "").trim();
  const content = (req.body.content || "").trim();

  if (!title || !content) {
    return res.status(400).send("Title and content are required.");
  }

  post.title = title;
  post.content = content;

  res.redirect(`/posts/${post.id}`);
});

// Delete post
app.post("/posts/:id/delete", (req, res) => {
  posts = posts.filter((p) => p.id !== req.params.id);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

