function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    const postsContainer = document.getElementById('ul_Id')
    for(post of posts){
        const li = document.createElement('li');
        li.classList.add('postStyles');
        li.innerHTML=`
        <h2>${post.title}</h2>
        <p>${post.body}<p>
        `
        postsContainer.appendChild(li);
    }
}