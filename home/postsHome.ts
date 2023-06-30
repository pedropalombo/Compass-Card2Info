var posts : Post[] = [
    {
        id: 1,
        title: "suriname",
        imageUrl: "aa",
        body: "lorem brolem colem strole"
    },
    {
        id: 2,
        title: "pastrame",
        imageUrl: "aa",
        body: "bangalang seimo xame"
    },
    {
        id: 3,
        title: "morinome",
        imageUrl: "aa",
        body: "quimbim drimstim dorencoda"
    },
    {
        id: 4,
        title: "constacobre",
        imageUrl: "aa",
        body: "pirimban toracopra sum barama"
    },
    {
        id: 5,
        title: "pizzapasta",
        imageUrl: "aa",
        body: "maletuza facuntinda serunia borupia"
    },
    {
        id: 6,
        title: "formacrista",
        imageUrl: "aa",
        body: "stomeriza conpaza fricamontunda"
    }
];

const card = document.getElementById('cardBtn');
card?.addEventListener('click', function handleClick(event) {
    console.log("deu bom");
  });

function goToPost() {
    //window.location.href = "/post.html";
    alert("deu bom");
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
        cardImage.src = '/imgs/cardImagePlaceholder.png'; 
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