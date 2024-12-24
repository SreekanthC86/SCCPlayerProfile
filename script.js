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

Teams.addEventListener("click",(event) =>{
    playerProfile.innerHTML = `<img src= "images/Teams_Captains.jpg">`;
            searchPage.style.display = "none";
            header.style.display = "none";
            playerProfile.style.display = "block";            
            backButton.style.display = "inline-block";
            AuctionRules.style.display = "none";
            Teams.style.display = "none";
});

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
