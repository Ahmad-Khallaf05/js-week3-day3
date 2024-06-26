const container = document.querySelector(".display")

function fetchPosts(){
    fetch('https://jsonplaceholder.typicode.com/albums?userId=1')
    .then(res =>  res.json())
    .then( data =>
        {
            let template = '';
            data.forEach(post => {
                template += `
                <div class="post">
                    <h4>${post.title }</h4>
                </div>
                `;
            });
    
            container.innerHTML = template;
        }
    )
}

window.onload = fetchPosts;