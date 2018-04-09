import { http } from "./http";
import { ui } from "./ui";

document.addEventListener("DOMContentLoaded", getPosts);
ui.postSubmit.addEventListener("click", addPost);
ui.postsList.addEventListener("click", enableEdit);
ui.postsList.addEventListener("click", deletePost);
ui.scrollTop.addEventListener("click", function(e) {
  ui.scrollTo(document.querySelector("header"));
  e.preventDefault();
});

function getPosts() {
  ui.clearInputs();
  http
    .get("http://localhost:3000/posts")
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

function addPost(data) {
  if (ui.inputTitle.value === "" || ui.inputBody.value === "") {
    ui.showAlert("Post has to have a title and content", "danger");
  } else {
    if (ui.forState === "add") {
      let data = {
        title: ui.inputTitle.value,
        body: ui.inputBody.value
      };
      ui.showAlert("Post added", "success");
      http
        .post("http://localhost:3000/posts", data)
        .then(data => {
          getPosts();
        })
        .catch(err => console.log(err));
    } else if (ui.forState === "update") {
      let data = {
        id: ui.postId.value,
        title: ui.inputTitle.value,
        body: ui.inputBody.value
      };
      ui.showAlert(`Post ${data.id} edited`, "success");
      ui.forState = "add";
      http
        .put(`http://localhost:3000/posts/${data.id}`, data)
        .then(data => {
          getPosts();
        })
        .catch(err => console.log(err));
    }
    ui.scrollTo(document.querySelector("footer"));
  }
}

function enableEdit(e) {
  if (e.target.classList.contains("fa-pencil")) {
    let id = e.target.parentElement.dataset.id;
    let title =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;
    let body = e.target.parentElement.previousElementSibling.textContent;
    ui.fillForm(title, body, id);
    ui.scrollTo(document.querySelector(".card"));
    ui.forState = "update";
    e.preventDefault();
  }
}

function deletePost(e) {
  if (e.target.classList.contains("fa-remove")) {
    let id = e.target.parentElement.dataset.id;
    http
      .delete(`http://localhost:3000/posts/${id}`)
      .then(data => {
        getPosts();
      })
      .catch(err => console.log(err));
    ui.showAlert(`Post ${id} deleted`, "success");
    e.preventDefault();
  }
}
