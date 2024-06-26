const container = document.querySelector('.posts');

function fetchPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>  res.json())
        .then( data =>
            {
                let template = '';
                data.forEach(post => {
                    template += `
                    <div class="post">
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    </div>
                    `;
                });
        
                container.innerHTML = template;
            }
        )
    }

 fetchPosts;

