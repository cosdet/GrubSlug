const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

let users = [];

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    users.forEach(user => {
        const isVisible = user.seller.toLowerCase().includes(value);
        user.element.classList.toggle("hide", !isVisible);
    });
});

fetch("./db/listings.json")
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const image = card.querySelector("[data-item-image]");
            const name = card.querySelector("[data-item-name]");
            const hours = card.querySelector("[data-item-hours]");
            image.src = user.picture;
            name.textContent = user.seller;
            hours.textContent = user.hours;
            userCardContainer.append(card);
            return { seller: user.seller, element: card };
        });
    });
