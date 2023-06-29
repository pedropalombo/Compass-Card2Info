                                        function goToPost() {
    //window.location.assign = "post/post.html";
}

function renderPosts() {
    let cardContainer = document.getElementById('cardContainer');
    posts.forEach(element => {

        //creating elements 
        let cardFormat = document.createElement('section');
        let cardImage = document.createElement('img');
        let cardTitle = document.createElement('p');
        let cardBody = document.createElement('p');
        let cardBtn = document.createElement('button');
        let lineBreaker = document.createElement('br');

        //creating elements' texts
        let titleText = document.createTextNode(element.title);
        let bodyText = document.createTextNode(element.body); 
        let btnText = document.createTextNode('Expand...');

        //setting ids
        cardFormat.setAttribute('id', 'cardFormat');
        cardImage.setAttribute('id', 'cardImage');
        cardTitle.setAttribute('id', 'cardTopic');
        cardBody.setAttribute('id', 'cardText');
        cardBtn.setAttribute('id', 'cardBtn');

        //setting texts
        cardImage.src = '/cardImagePlaceholder.png'; 
        cardFormat.appendChild(cardImage);

        cardTitle.appendChild(titleText)
        cardFormat.appendChild(cardTitle);

        cardBody.appendChild(bodyText);
        cardFormat.appendChild(cardBody);

        cardBtn.appendChild(btnText);
        cardFormat.appendChild(cardBtn);

        cardFormat.appendChild(lineBreaker)

        //appending to DOM
        cardContainer?.appendChild(cardFormat);

        /*return `
            <section id="cardFormat">
                <img id="cardImage" src="/cardImagePlaceholder.png">
                <p id="cardTopic">
                    ${element.title}
                </p>
                <p>
                    ${element.body}
                </p>
                <button id="cardBtn">
                    Expand...
                </button>
            </section>
            <br />
        `*/
    });
}