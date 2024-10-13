const searchParams = new URLSearchParams(window.location.search);

//load custom seller parameters
window.onload = function(){
    if (searchParams.has("seller")){
        const seller = searchParams.get("seller").replace(/-/g, ' ');
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