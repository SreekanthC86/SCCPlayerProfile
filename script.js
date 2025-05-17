// Player data with relative image paths
const players = [
    { id: 1, name: "Aravind", image: "images/Aravind.gif" },
    { id: 2, name: "Rakesh", image: "images/Rakesh.gif" },
    { id: 3, name: "Praveen", image: "images/Praveen.gif" },
    { id: 4, name: "Sathish", image: "images/Sathish.gif" },
    { id: 5, name: "Pravith", image: "images/Pravith.gif" },
    { id: 6, name: "Ram Sunder", image: "images/Ramsunder.gif" },
    { id: 7, name: "Sreekanth", image: "images/Sreekanth.gif" },
    { id: 8, name: "Bala", image: "images/Bala.gif" },
    { id: 9, name: "Hariharasudhan", image: "images/Hari.gif" },
    { id: 10, name: "Kamal", image: "images/Kamal.gif" },
    { id: 11, name: "Krishna Suresh", image: "images/Krishna.gif" },
    { id: 12, name: "Ram G", image: "images/Ram_G.gif" },
    { id: 13, name: "Siva", image: "images/Siva.gif" },
    { id: 14, name: "Venkat", image: "images/Venkat.gif" },
    { id: 15, name: "Norton", image: "images/Norton.gif" },
    { id: 16, name: "Sabari", image: "images/Sabari.gif" },
    { id: 17, name: "Sudar", image: "images/Sudar.gif" },
    { id: 18, name: "Surya", image: "images/Surya.gif" },
    { id: 19, name: "Allwin", image: "images/Allwin.gif" },
    { id: 20, name: "Gokul", image: "images/Gokul.gif" },
    { id: 21, name: "Yadav", image: "images/Yadav.gif" },
    { id: 22, name: "Akash", image: "images/Akash.gif" },
    { id: 23, name: "Murali", image: "images/Murali.gif" },
    { id: 24, name: "Nappu", image: "images/Nappu.gif" },
    { id: 25, name: "Palanivel", image: "images/Palanivel.gif" },
    { id: 26, name: "Sanjay CM", image: "images/Sanjay_CM.gif" },
    { id: 27, name: "Sanjay", image: "images/Sanjay.gif" },
    { id: 28, name: "Vinoth S K", image: "images/Vinoth_SK.gif" },
    { id: 29, name: "Vasanth", image: "images/Vasanth.gif" },
    { id: 30, name: "Dinesh", image: "images/Dinesh.gif" },
    { id: 31, name: "Gopal", image: "images/Gopal.gif" },
    { id: 32, name: "Navaneethan", image: "images/Navaneethan.gif" },
    { id: 33, name: "Rahul", image: "images/Rahul.gif" },
    { id: 34, name: "Senthil C", image: "images/Senthil_C.gif" },
    { id: 35, name: "Senthil D", image: "images/Senthil_D.gif" },
    { id: 36, name: "Vinoth M", image: "images/Vinoth_M.gif" },
    { id: 37, name: "Balamurugan", image: "images/Balamurugan.gif" },
    { id: 38, name: "Baskar", image: "images/Baskar.gif" },
    { id: 39, name: "Fermi", image: "images/Fermi.gif" },
    { id: 40, name: "Hari C", image: "images/Hari_C.gif" },
    { id: 41, name: "Krishnamoorthy", image: "images/Krishnamoorthy.gif" },
    { id: 42, name: "Sharvesh SR", image: "images/Sarvesh_SR.gif" },
    { id: 43, name: "Gokulraj", image: "images/Gokulraj.gif" },
    { id: 44, name: "Natarajan", image: "images/Natarajan.gif" }
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
            player.name.toLowerCase().startsWith(query)
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
        { thumbnail: "images/GP11.jpg", popup: "images/Arun.gif" },
        { thumbnail: "images/TeamHulk.png", popup: "images/Gopi.gif" },
        { thumbnail: "images/A11.jpg", popup: "images/Pragadeesh.gif" },
        { thumbnail: "images/T11.png", popup: "images/Vijay.gif" }
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
