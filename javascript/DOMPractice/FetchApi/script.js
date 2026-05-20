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

postBtn.addEventListener('click', () => {

    fetch("https://jsonplaceholder.typicode.com/posts")
    
    .then(res => res.json())

    .then(data => {

        data.forEach(post => {

            let li = document.createElement('li');

            li.textContent = post.title;

            postList.appendChild(li);

        });

    });

});

loadingBtn.addEventListener('click', () => {

    loadingText.textContent = 'Loading...';

    fetch("https://jsonplaceholder.typicode.com/users")
    
    .then(res => res.json())

    .then(data => {

        loadingText.textContent = 'Data Loaded!';

    });

});

errorBtn.addEventListener('click', () => {

    errorText.textContent = 'Fetching data...';

    fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")
    
    .then(res => res.json())

    .then(data => {

        errorText.textContent = 'Data Loaded!';

    })

    .catch(err => {

        errorText.textContent = 'Error fetching data!';

    });

}); 