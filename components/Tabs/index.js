// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(function (response) {
    // handle success
    const data = response.data.topics;
    console.log(response);

    data.forEach( item => {
        createTab(item);
    });

    createTab('all');


  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


function createTab(data){
    const topics = document.querySelector('.topics');

    const topic = document.createElement('div');
    topic.classList.add('tab');
    topic.setAttribute('data-category', data);

    topic.addEventListener('click', e => {
      const category = topic.getAttribute('data-category');

      //Filter card  via topic
      const cards = document.querySelectorAll('.card');
      cards.forEach( card => {
        const cardCategory = card.getAttribute('data-category');
        // !!!IMPORTANT --> node.js !== node 
        if ( category === 'all') {
          card.style.display = 'block';
        } else if ( category.indexOf(cardCategory) > -1 ) {
          card.style.display = 'block';
        } else card.style.display = 'none';
      })
    });

    topic.textContent = data;
    topics.appendChild(topic);

    return topic;
}