let url = "https://exam1.minadesign.one/wp-json/wp/v2/posts?per_page=16";


const resultsContainer1 = document.querySelector(".carousel1");
const resultsContainer2 = document.querySelector(".carousel2");
const resultsContainer3 = document.querySelector(".carousel3");
const resultsContainer4 = document.querySelector(".carousel4");
const resultsContainer5 = document.querySelector(".carousel5");


async function getPosts() {

    

    try{

    const response = await fetch(url);

    const results = await response.json();

    const posts = results;

    resultsContainer1.innerHTML = "";

    

    for (let i = 0; i < posts.length; i++) {
        console.log(posts[i].id);

        if (i === 3) {
            break;
        }

        const formatDate  = new Date(posts[i].date).toLocaleString("en-GB", {day: "numeric",  month: "numeric", year: "numeric",});

        resultsContainer1.innerHTML += `<a href="postspecificpage.html?id=${posts[i].id}" class="results"><h3>${posts[i].title.rendered}</h3> 
                                        
                                        <div class="post">${posts[i].content.rendered}</div>
                                        <div class="date">Date: ${formatDate} - Marbella</div>
                                        <p class="readmore">Read More <i class="fas fa-chevron-right"></i></p>
                                        </a>`;
    }
    for (let i = 3; i < posts.length; i++) {
        console.log(posts[i].id);

        if (i === 6) {
            break;
        }

        const formatDate  = new Date(posts[i].date).toLocaleString("en-GB", {day: "numeric",  month: "numeric", year: "numeric",});

        resultsContainer2.innerHTML += `<a href="postspecificpage.html?id=${posts[i].id}" class="results"><h3>${posts[i].title.rendered}</h3> 
                                        
                                        <div class="post">${posts[i].content.rendered}</div>
                                        <div class="date">Date: ${formatDate} - Marbella</div>
                                        <p class="readmore">Read More <i class="fas fa-chevron-right"></i></p>
                                        </a>`;

         

    }
    for (let i = 6; i < posts.length; i++) {
        console.log(posts[i].id);

        if (i === 9) {
            break;
        }

        const formatDate  = new Date(posts[i].date).toLocaleString("en-GB", {day: "numeric",  month: "numeric", year: "numeric",});

        resultsContainer3.innerHTML += `<a href="postspecificpage.html?id=${posts[i].id}" class="results"><h3>${posts[i].title.rendered}</h3> 
                                        
                                        <div class="post">${posts[i].content.rendered}</div>
                                        <div class="date">Date: ${formatDate} - Marbella</div>
                                        <p class="readmore">Read More <i class="fas fa-chevron-right"></i></p>
                                        </a>`;

                                       
    }
    for (let i = 9; i < posts.length; i++) {
        console.log(posts[i].id);

        if (i === 12) {
            break;
        }

        const formatDate  = new Date(posts[i].date).toLocaleString("en-GB", {day: "numeric",  month: "numeric", year: "numeric",});

        resultsContainer4.innerHTML += `<a href="postspecificpage.html?id=${posts[i].id}" class="results"><h3>${posts[i].title.rendered}</h3> 
                                        
                                        <div class="post">${posts[i].content.rendered}</div>
                                        <div class="date">Date: ${formatDate} - Marbella</div>
                                        <p class="readmore">Read More <i class="fas fa-chevron-right"></i></p>
                                        </a>`;

        
    }
    for (let i = 12; i < posts.length; i++) {
        console.log(posts[i].id);

        if (i === 15) {
            break;
        }

        const formatDate  = new Date(posts[i].date).toLocaleString("en-GB", {day: "numeric",  month: "numeric", year: "numeric",});


        resultsContainer5.innerHTML += `<a href="postspecificpage.html?id=${posts[i].id}" class="results"><h3>${posts[i].title.rendered}</h3> 
                                        
                                        <div class="post">${posts[i].content.rendered}</div>
                                        <div class="date">Date: ${formatDate} - Marbella</div>
                                        <p class="readmore">Read More <i class="fas fa-chevron-right"></i></p>
                                        </a>`;

        
        
}
    } catch (error) {
        console.log("an error occurred");
        resultsContainer.innerHTML = `<div class="results"><h2 class="red">an error occurred</h2></div>`;
    }
}



getPosts();


