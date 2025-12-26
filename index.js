import bodyParser from "body-parser";
import express from "express";
const app = express();
const port = 3000;
var posts = [];
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
})
app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});
