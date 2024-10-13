const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
const searchParams = new URLSearchParams(window.location.search);

// Search functionality
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase() // Convert to lowercase for case-insensitive search
    items.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value);
        user.element.classList.toggle("hide", !isVisible);
    })
})

let items = [];

//load custom seller parameters and list all food/item cards
window.onload = function(){
    if (searchParams.has("seller")){
        const seller = searchParams.get("seller").replace(/-/g, ' ');
        fetch("./db/listings.json")
            .then(res => res.json())
            .then(data => {
                data.forEach(user => {
                    if(user.seller == seller){
                        document.getElementById("avatar").src = user.picture;
                        document.getElementById("seller").innerText = `${seller}`;
                        document.getElementById("bio").innerText = `${user.bio}`;
                        items = user.items.map(item => {
                            const card = userCardTemplate.content.cloneNode(true).children[0]
                            const image = card.querySelector("[data-image]");
                            const name = card.querySelector("[data-name]");
                            const price = card.querySelector("[data-price]");
                            const button = card.querySelector("[data-button]");

                            button.href = `foodDisplay.html?name=${item.item_name.replace(/\s/g, '-').replace(/\./g, '_')}`;
                            image.src = item.item_picture;
                            name.textContent = item.item_name;
                            price.textContent = `$${parseFloat(item.item_price).toFixed(2)}`;
                            userCardContainer.append(card);

                            return { name: item.item_name, element: card };
                        })
                    }
                })
            });
    };
};