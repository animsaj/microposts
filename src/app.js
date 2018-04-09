import { getPosts } from "./services";

getPosts("https://jsonplaceholder.typicode.com/posts/")
  .then(data => console.log(data))
  .catch(err => console.log(err));
