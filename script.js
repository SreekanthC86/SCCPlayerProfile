// Player data with relative image paths
const players = [
    { id: 1, name: "Aravind", image: "images/Aravind.jpg" },
    { id: 2, name: "Arun", image: "images/Arun.jpg" },
    { id: 3, name: "Gopinathan", image: "images/Gopinathan.jpg" },
    { id: 4, name: "Pragadeesh", image: "images/Pragadeesh.jpg" },
    { id: 5, name: "Pravith", image: "images/Pravith.jpg" },
    { id: 6, name: "Ram Sunder", image: "images/Ram_Sunder.jpg" },
    { id: 7, name: "Sreekanth", image: "images/Sreekanth.jpg" },
    { id: 8, name: "Bala", image: "images/Bala.jpg" },
    { id: 9, name: "Hariharasudhan", image: "images/Hariharasudhan.jpg" },
    { id: 10, name: "Kamal", image: "images/Kamal.jpg" },
    { id: 11, name: "Krishna Suresh", image: "images/Krishna_Suresh.jpg" },
    { id: 12, name: "Ram G", image: "images/Ram_G.jpg" },
    { id: 13, name: "Siva", image: "images/Siva.jpg" },
    { id: 14, name: "Venkat", image: "images/Venkat.jpg" },
    { id: 15, name: "Norton", image: "images/Norton.jpg" },
    { id: 16, name: "Sabari", image: "images/Sabari.jpg" },
    { id: 17, name: "Sudar", image: "images/Sudar.jpg" },
    { id: 18, name: "Surya", image: "images/Surya.jpg" },
    { id: 19, name: "Thiru", image: "images/Thiru.jpg" },
    { id: 20, name: "Vijay Anand", image: "images/Vijay_Anand.jpg" },
    { id: 21, name: "Yadav", image: "images/Yadav.jpg" },
    { id: 22, name: "Akash", image: "images/Akash.jpg" },
    { id: 23, name: "Murali", image: "images/Murali.jpg" },
    { id: 24, name: "Nappu", image: "images/Nappu.jpg" },
    { id: 25, name: "Palanivel", image: "images/Palanivel.jpg" },
    { id: 26, name: "Sanjay CM", image: "images/Sanjay_CM.jpg" },
    { id: 27, name: "Vijay Balaji", image: "images/Vijay.jpg" },
    { id: 28, name: "Vinoth S K", image: "images/Vinoth_SK.jpg" },
    { id: 29, name: "Dinesh", image: "images/Dinesh.jpg" },
    { id: 30, name: "Gopal", image: "images/Gopal.jpg" },
    { id: 31, name: "Navaneethan", image: "images/Navaneethan.jpg" },
    { id: 32, name: "Rahul", image: "images/Rahul.jpg" },
    { id: 33, name: "Rakesh", image: "images/Rakesh.jpg" },
    { id: 34, name: "Senthil C", image: "images/Senthil_C.jpg" },
    { id: 35, name: "Senthil D", image: "images/Senthil_D.jpg" },
    { id: 36, name: "Vinoth M", image: "images/Vinoth_M.jpg" },
    { id: 37, name: "Abishek", image: "images/Abishek.jpg" },
    { id: 38, name: "Bala (Chef)", image: "images/Bala_Chef.jpg" },
    { id: 39, name: "Baskar", image: "images/Baskar.jpg" },
    { id: 40, name: "Fermi", image: "images/Fermi.jpg" },
    { id: 41, name: "Hari C", image: "images/Hari_C.jpg" },
    { id: 42, name: "KrishnaMoothy", image: "images/Krishna.jpg" },
    { id: 43, name: "Mohan", image: "images/Mohan.jpg" },
    { id: 44, name: "Sharvesh SR", image: "images/Sharvesh_SR.jpg" },
    { id: 45, name: "Sivakumar", image: "images/Siva_Sir.jpg" }
];

const Teams = document.getElementById("Teams");
const AuctionRules = document.getElementById("AuctionRules");
const searchPage = document.getElementById("search-page");
const searchBar = document.getElementById("search-bar");
const searchResults = document.getElementById("search-results");
const playerProfile = document.getElementById("player-profile");
const backButton = document.getElementById("back-button");
const header = document.getElementById("header");

// Show filtered search results
searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    searchResults.innerHTML = ""; // Clear results

    if (query) {
        const filteredPlayers = players.filter(player =>
            player.name.toLowerCase().includes(query)
        );

        filteredPlayers.forEach(player => {
            const resultDiv = document.createElement("div");
            resultDiv.textContent = player.name;
            resultDiv.dataset.id = player.id; // Store player ID
            searchResults.appendChild(resultDiv);
        });
    }
});

// Display player profile on selection
searchResults.addEventListener("click", (event) => {
    const playerId = event.target.dataset.id;

    if (playerId) {
        const selectedPlayer = players.find(player => player.id === parseInt(playerId));
        //<h2>${selectedPlayer.name}</h2>
        if (selectedPlayer) {
            playerProfile.innerHTML = `<img src="${selectedPlayer.image}" alt="${selectedPlayer.name}">`;
            searchPage.style.display = "none";
            header.style.display = "none";
            playerProfile.style.display = "block";
            AuctionRules.style.display = "none";
            Teams.style.display = "none";   
            backButton.style.display = "inline-block"; // Show Back button
        }
    }
});

AuctionRules.addEventListener("click",(event) =>{
    playerProfile.innerHTML = `<img src= "images/Auction_Rules.jpg">`;
            searchPage.style.display = "none";
            header.style.display = "none";
            playerProfile.style.display = "block";            
            backButton.style.display = "inline-block";
            AuctionRules.style.display = "none";
            Teams.style.display = "none";
});

Teams.addEventListener("click", (event) => {
    // Define the list of images to display for teams and their corresponding popup images
    const teamImages = [
        { thumbnail: "images/VJB.jpg", popup: "images/Pravin.jpg" },
        { thumbnail: "images/NMSD11.jpg", popup: "images/Sathish.jpg" },
        { thumbnail: "images/Warriors.jpg", popup: "images/Gokul.jpg" },
        { thumbnail: "images/Leo.jpg", popup: "images/Vasanth.jpg" }
    ];

    // Clear the playerProfile content
    playerProfile.innerHTML = "";

    // Create a container for the images
    const imageContainer = document.createElement("div");
    imageContainer.style.display = "flex";
    imageContainer.style.justifyContent = "center";
    imageContainer.style.alignItems = "center";
    imageContainer.style.flexWrap = "wrap";
    imageContainer.style.gap = "15px";
    imageContainer.style.marginTop = "200px";

    // Add images to the container
    teamImages.forEach(image => {
        const img = document.createElement("img");
        img.src = image.thumbnail;
        img.alt = "Team Thumbnail";
        img.style.width = "350px";
        img.style.height = "auto";
        img.style.border = "2px solid #ccc";
        img.style.borderRadius = "5px";
        img.style.objectFit = "cover";
        img.style.cursor = "pointer";

        // Add click event to open popup
        img.addEventListener("click", () => openPopup(image.popup));

        imageContainer.appendChild(img);
    });

    // Append the image container to the playerProfile
    playerProfile.appendChild(imageContainer);

    // Update the visibility of other elements
    searchPage.style.display = "none";
    header.style.display = "none";
    playerProfile.style.display = "block";
    backButton.style.display = "inline-block";
    AuctionRules.style.display = "none";
    Teams.style.display = "none";
});

// Function to create and display the popup
function openPopup(popupImageSrc) {
    // Create the popup overlay
    const popupOverlay = document.createElement("div");
    popupOverlay.style.position = "fixed";
    popupOverlay.style.top = "0";
    popupOverlay.style.left = "0";
    popupOverlay.style.width = "100%";
    popupOverlay.style.height = "100%";
    popupOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    popupOverlay.style.display = "flex";
    popupOverlay.style.justifyContent = "center";
    popupOverlay.style.alignItems = "center";
    popupOverlay.style.zIndex = "1000";

    // Create the popup image
    const popupImage = document.createElement("img");
    popupImage.src = popupImageSrc;
    popupImage.alt = "Popup Image";
    popupImage.style.maxWidth = "90%";
    popupImage.style.maxHeight = "80%";
    popupImage.style.borderRadius = "10px";

    // Create the close button
    const closeButton = document.createElement("button");
    closeButton.textContent = "✖";
    closeButton.style.position = "absolute";
    closeButton.style.top = "20px";
    closeButton.style.right = "30px";
    closeButton.style.fontSize = "24px";
    closeButton.style.color = "white";
    closeButton.style.background = "none";
    closeButton.style.border = "none";
    closeButton.style.cursor = "pointer";

    // Add close event
    closeButton.addEventListener("click", () => {
        document.body.removeChild(popupOverlay);
    });

    // Append elements to the popup overlay
    popupOverlay.appendChild(popupImage);
    popupOverlay.appendChild(closeButton);

    // Append popup overlay to the body
    document.body.appendChild(popupOverlay);
}

// Back to Search button functionality
backButton.addEventListener("click", () => {
    header.style.display = "flex";
    searchPage.style.display = "block";    
    playerProfile.style.display = "none";
    searchBar.value = "";
    searchResults.innerHTML = ""; // Clear search results
    backButton.style.display = "none";
    AuctionRules.style.display = "flex";
    Teams.style.display = "flex";
});
