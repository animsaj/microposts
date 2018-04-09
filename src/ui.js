class UI {
  constructor() {
    this.postsList = document.querySelector(".posts");
    this.inputTitle = document.getElementById("title");
    this.inputBody = document.getElementById("body");
    this.postId = document.getElementById("id");
    this.postSubmit = document.getElementById("post-submit");
    this.scrollTop = document.getElementById("scroll-top");
    this.forState = "add";
  }

  showPosts(posts) {
    let output = "";
    posts.forEach(post => {
      output += `
			<div class="post">
				<h3>${post.title}</h3>
				<p>${post.body}</p>
				<a href="#" data-id="${post.id}"><i class="fa fa-pencil"></i></a>
				<a href="#" data-id="${post.id}"><i class="fa fa-remove"></i></a>
			</div>
			`;
    });
    this.postsList.innerHTML = output;
  }

  showAlert(message, className) {
    let alert = document.createElement("div");
    alert.className = `alert ${className}`;
    alert.textContent = message;
    document
      .querySelector(".main-container")
      .insertBefore(alert, document.querySelector(".card"));
    setTimeout(() => {
      alert.remove();
    }, 3000);
  }

  clearInputs() {
    this.inputTitle.value = "";
    this.inputBody.value = "";
  }

  fillForm(title, body, id) {
    this.inputTitle.value = title;
    this.inputBody.value = body;
    this.postId.value = id;
  }

  scrollTo(element) {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: element.offsetTop
    });
  }
}

export const ui = new UI();
