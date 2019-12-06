// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(function (response) {
    
    const articles = response.data.articles;
    //console.log('DATA:', articles);

    for (const key in articles) {
        const topics = articles[key];

        topics.forEach( elem => {
            createArticle(elem);
            //console.log(elem);
        })
    } 
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })



function createArticle(articles){
    const container = document.querySelector('.cards-container');

    //card
    const card = document.createElement('div');
    card.classList.add('card');
    container.appendChild(card);


    //headline
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = articles.headline;
    card.appendChild(headline);



    //author
    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);

    //imgContainer
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    author.appendChild(imgContainer);


    //img
    const img  = document.createElement('img');
    img.src = articles.authorPhoto;
    imgContainer.appendChild(img);


    //span
    const span = document.createElement('span');
    span.textContent = `By ${articles.authorName}`
    author.appendChild(span);

    return card;

}