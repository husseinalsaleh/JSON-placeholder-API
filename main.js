
// Fetching data from API Using Fetch API with Promises
function getPosts(userId) {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                throw new Error('Failed to fetch posts');
            }
        })
        .then(posts => {
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
        })
        .catch(() => {
            alert("Error loading posts");
        });
}

function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                throw new Error('Failed to fetch users');
            }
        })
        .then(users => {
            document.getElementById("users").innerHTML = "";
            for (user of users) {
                let content = `
                <div onclick="userClicked(${user.id}, this)" id="user">
                    <h3>${user.username}</h3>
                    <h3>${user.email}</h3>
                </div>
                `;
                document.getElementById("users").innerHTML += content;
            }
        })
        .catch(() => {
            alert("Error loading users");
        });
}

getPosts(2);
getUsers();

function userClicked(id, ele) {
    getPosts(id);
    let selectedElements = document.getElementsByClassName("selected")
    for (element of selectedElements) {
        element.classList.remove("selected");
    }
    ele.classList.add("selected");
};








// // Fetching data from API Using Fetch API with Async/Await

// async function getPosts(userId) {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
//         if (!response.ok) {
//             throw new Error('Request failed');
//         }
//         const posts = await response.json();
//         document.getElementById("posts").innerHTML = "";
//         for (post of posts) {
//             let content = `
//                 <div id="post">
//                     <h3>${post.title}</h3>
//                     <h4>${post.body}</h4>
//                 </div>
//             `;
//             document.getElementById("posts").innerHTML += content;
//         }
//     } catch (error) {
//         alert("error");
//     }
// }

// // Fetching users from API Using Fetch API with Async/Await
// async function getUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!response.ok) {
//             throw new Error('Request failed');
//         }
//         const users = await response.json();
//         document.getElementById("users").innerHTML = "";
//         for (user of users) {
//             let content = `
//             <div onclick="userClicked(${user.id}, this)" id="user">
//                 <h3>${user.username}</h3>
//                 <h3>${user.email}</h3>
//             </div>
//             `;
//             document.getElementById("users").innerHTML += content;
//         }
//     } catch (error) {
//         alert("error");
//     }
// }

// getPosts(2);
// getUsers();

// // Fetching posts of selected user
// function userClicked(id, ele) {
//     getPosts(id);
//     let selectedElements = document.getElementsByClassName("selected")
//     for (element of selectedElements) {
//         element.classList.remove("selected");
//     }
//     ele.classList.add("selected");
// };












// // Fetching data from API Using XMLHTTPSREQUESt

// function getPosts(userId) {
//     let request = new XMLHttpRequest()
//     request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=" + userId);
//     request.responseType = "json";
//     request.send();
//     request.onload = function () {
//         if (request.status >= 200 && request.status < 300) {
//             let posts = request.response;
//             document.getElementById("posts").innerHTML = "";

//             for (post of posts) {
//                 let content = `
//                     <div id="post">
//                         <h3>${post.title}</h3>
//                         <h4>${post.body}</h4>
//                     </div>
//                         `;
//                 document.getElementById("posts").innerHTML += content;

//             }
//         } else {
//             alert("error");
//         }
//     }
// }

// // Fetching users from API Using XMLHTTPSREQUESt

// getPosts(2);


// function getUsers() {
//     let request = new XMLHttpRequest()
//     request.open("GET", "https://jsonplaceholder.typicode.com/users");
//     request.responseType = "json";
//     request.send();
//     request.onload = function () {
//         if (request.status >= 200 && request.status < 300) {
//             let users = request.response;
//             document.getElementById("users").innerHTML = "";

//             for (user of users) {
//                 let content = `
//                 <div onclick="userClicked(${user.id}, this)" id="user">
//                     <h3>${user.username}</h3>
//                     <h3>${user.email}</h3>
//                 </div>
//                         `;
//                 document.getElementById("users").innerHTML += content;

//             }
//         } else {
//             alert("error");
//         }
//     }
// }

// getUsers();

// // Fetching posts of selected user

// function userClicked(id, ele) {
//     getPosts(id);
//     let selectedElements = document.getElementsByClassName("selected")
//     for (element of selectedElements) {
//         element.classList.remove("selected");
//     }
//     ele.classList.add("selected");
// };
