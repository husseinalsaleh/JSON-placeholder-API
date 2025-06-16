function getPosts() {
    let request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/posts");
    request.responseType = "json";
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response;
            document.getElementById("posts").innerHTML = "";

            for (post of posts) {
                let content = `
                    <div id="post">
                        <h3>${post.title}</h3>
                        <h4>${post.body}</h4>
                    </div>
                        `;
                document.getElementById("posts").innerHTML += content;

            }
        } else {
            alert("error");
        }
    }
}
getPosts();