const container = document.querySelector(".display")

function fetchPosts(){
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
    .then(res =>  res.json())
    .then( data =>
        {
            let template = '';
            data.forEach(post => {
                template += `
                <div class="post">
                    <h3>${post.title}</h3>
                    <img src="${post.thumbnailUrl}" alt="">
                </div>
                `;
            });
    
            container.innerHTML = template;
        }
    )
}

window.onload = fetchPosts;