document.addEventListener("DOMContentLoaded", () => {
    const drawCardButton = document.getElementById("drawCardButton");
    const displayCard = document.getElementById("displayCard");

    const cardDraw = async () => {
        try {
            const res = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1"); 
            const data= await res.json();

            if (data.cards.length > 0) {
                const card = data.cards[0];
                const imgUrl = card.image;

                // Create element and set attribute
                const cardImage = document.createElement("img");
                cardImage.setAttribute("src", imgUrl);

                displayCard.innerHTML = "";
                displayCard.appendChild(cardImage);
            } 
            else {
                displayCard.innerHTML = "No cards left in the deck!";
            }
        } 
        catch (error) {
            console.error("Error drawing a card:", error);
            displayCard.innerHTML = "An error occurred while drawing a card.";
        }
    };

    drawCardButton.addEventListener("click", cardDraw);
});