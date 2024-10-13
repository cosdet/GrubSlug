const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
const searchParams = new URLSearchParams(window.location.search);

//load custom seller parameters
window.onload = function(){
    if (searchParams.has("seller")){
        const seller = searchParams.get("seller").replace(/-/g, ' ');
        console.log(seller);
        fetch("./db/listings.json")
            .then(res => res.json())
            .then(data => {
                data.forEach(user => {
                    if(user.seller == seller){
                        document.getElementById("avatar").src = `/images/${seller.replace(/\s/g, '').toLowerCase()}.png`;
                        document.getElementById("seller").innerText = `${seller}`;
                        document.getElementById("bio").innerText = `${user.bio}`;
                    }
                })
            });
    };
};


// object
let users = []

// Search functionality
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase() // Convert to lowercase for case-insensitive search
    users.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })
})

// Fetch users
fetch("https://jsonplaceholder.typicode.com/users")//i hate this
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            header.textContent = user.name
            body.textContent = user.email
            userCardContainer.append(card)

            //console.log(card) // Moved console.log here

            return { name: user.name, email: user.email, element: card }
        })
    })
