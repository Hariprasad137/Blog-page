import bodyParser from "body-parser";
import express from "express";
import path from "path"; // 1. Import 'path' module

const app = express();
const port = 3000;
var posts = [];

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

app.get("/create", (req, res) => {
  res.render("createPosts.ejs");
});

app.post("/submit", (req, res) => {
  const post = {
    title: req.body["title"],
    content: req.body["content"],
    author: req.body["author"],
  };
  posts.push(post);
  res.redirect("/");
});

app.post("/delete", (req, res) => {
    const index = req.body["postId"];
    posts.splice(index, 1);
    res.redirect("/");
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server Running on ${port}`);
    });
}

export default app;