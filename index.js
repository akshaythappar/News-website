console.log("this is my indexjs file")
// 892d670886534167b54e1f25cd3e8d12


//Initialise the news parameters
let source = "The-Hindu";
let apikey  = '892d670886534167b54e1f25cd3e8d12';

//Grab the news container
newsAccordion = document.getElementById('newsAccordion');

// Create a ajax get request 
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`,true);

//What to do when response is ready
xhr.onload = function(){
    if(this.status===200){
       let json =  JSON.parse(this.responseText);
       let articles = json.articles;
    //    console.log(articles);
    let newsHtml = '';
    articles.forEach(function(element,index) {
        
 
console.log(index);
    let news = ` <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                         <b> Breaking News ${index+1}:</b>      &nbsp; ${element["title"]}
                        </button>
                    </h2>
                    <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                        data-bs-parent="#newsAccordion">
                        <div class="accordion-body">${element["content"]}. <a href ="${element['url']}"target=_blank style="text-decoration:none;">Read more here</a></div>
                    </div>
                </div> `;

                newsHtml += news;

            });
    newsAccordion.innerHTML = newsHtml;
    }
    else{
        console.log("some error occured");
    }
}
xhr.send();







let news = `

<div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the
            collapse plugin adds the appropriate classes that we use to style each element. These classes
            control the overall appearance, as well as the showing and hiding via CSS transitions. You can
            modify any of this with custom CSS or overriding our default variables. It's also worth noting
            that just about any HTML can go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
        </div>
    </div>
</div> `;

