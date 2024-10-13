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
            const image = card.querySelector("[data-image]");
            const name = card.querySelector("[data-name]");
            const address = card.querySelector("[data-address]");
            const hours = card.querySelector("[data-hours]");
            const link = card.querySelector("[data-button]");
            link.href = `sellerPage.html?seller=${user.seller.replace(/\s/g, '-')}`;
            image.src = user.picture;
            name.textContent = user.seller;
            address.textContent = `Pickup: ${user.address}`;
            hours.textContent = user.hours;
            userCardContainer.append(card);
            return { seller: user.seller, element: card };
        });
    });
