const container = document.querySelector(".display")

function fetchPosts(){
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then(res =>  res.json())
    .then( data =>
        {
            let template = '';
            data.forEach(post => {
                template += `
                <div class="post">
                    <h4>${post.email}</h4>
                    <p>${post.body}</p>
                </div>
                `;
            });
    
            container.innerHTML = template;
        }
    )
}

window.onload = fetchPosts;