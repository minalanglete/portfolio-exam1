const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id"); 

console.log(id);


const url = "https://exam1.minadesign.one/wp-json/wp/v2/posts/" +id;


const resultsContainer = document.querySelector(".resultspost");


async function getPost() {

    try{

    const response = await fetch(url);

    const results = await response.json();

    const product = results;

    resultsContainer.innerHTML = "";

    const viewImg = document.querySelector(".modal");
    const view = document.querySelector(".resultspost");

    viewImg.style.display = "none";    

        
    const formatDate  = new Date(product.date).toLocaleString("en-GB", {day: "numeric",  month: "numeric", year: "numeric",});

        resultsContainer.innerHTML += `<div class="resultspost">
                                        <h3>${product.title.rendered}</h3> 
                                        <div class="date">Date: ${formatDate}</div>
                                        <div class="post">${product.content.rendered}</div>
                                        
                                        
                                        </div>`;   
                                        
    view.onclick = function () {
      viewImg.innerHTML =   `<div class="modal">${product.content.rendered}</div>`;
      viewImg.style.display = "block";
}    

    function removeImg() {
      viewImg.innerHTML = "";
      viewImg.style.display = "none"; 
    }
        viewImg.addEventListener("click", removeImg);
  

    } catch (error) {
        console.log("an error occurred");
        resultsContainer.innerHTML = `<div class="results"><h2 class="red">an error occurred</h2></div>`;
    }
}



getPost();

