// Array of prepopulated strings
var strings = [
  "PLuWIxgNYqm0ketpCdUpLK4zjreYpDlLoE",
  "PLuWIxgNYqm0lwRXD3Sqe2_ZryiljuW-L9",
  "PLuWIxgNYqm0lnbXjnFF3bdEBbRHkr-R3k",
  "PLuWIxgNYqm0mQd_Z6eYbNa8Riyjl0znGC",
  "PLuWIxgNYqm0lXxPLZ9hBT9M46m53H5GES"
];

function generateRandomPlaylist() {
  // Get a random index from the strings array
  var randomIndex = Math.floor(Math.random() * strings.length);
  
  // Get the string at the random index
  var randomPlaylist = strings[randomIndex];
  
  // Set the src attribute of the iframe to the random string
  document.getElementById("playlistiframe").src = "https://www.youtube-nocookie.com/embed/videoseries?list=" + randomPlaylist;
}

// Call the function when the page loads
window.addEventListener("load", generateRandomPlaylist);
