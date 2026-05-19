let userBtn = document.getElementById('userBtn');
let userList = document.getElementById('userList');

let postBtn = document.getElementById('postBtn');
let postList = document.getElementById('postList');

let loadingBtn = document.getElementById('loadingBtn');
let loadingText = document.getElementById('loadingText');

let errorBtn = document.getElementById('errorBtn');
let errorText = document.getElementById('error  Text');

userBtn.addEventListener('click', () => {

    fetch("https://jsonplaceholder.typicode.com/users")
    
    .then(res => res.json())

    .then(data => {

        data.forEach(user => {

            let li = document.createElement('li');

            li.textContent = user.name;

            userList.appendChild(li);

        });

    });

});