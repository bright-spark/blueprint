// Get necessary DOM elements
const openViewButton = document.getElementById('open-view');
const iframe = document.getElementById('iframe-1046');

// Open the iframe with the specified website URL
openViewButton.addEventListener('click', () => {
    const websiteUrl = 'https://external-navigator.carrd.co'; // Replace with the desired website URL
    iframe.src = websiteUrl;
});

var basicTimeline = anime.timeline({
  autoplay: false
});

basicTimeline
  .add({
    targets: ".text",
    duration: 1,
    opacity: "0"
  })
  .add({
    targets: ".button",
    duration: 1300,
    height: 10,
    width: 300,
    backgroundColor: "#2B2D2F",
    border: "0",
    borderRadius: 100
  })
  .add({
    targets: ".progress-bar",
    duration: 2000,
    width: 300,
    easing: "linear"
  })
  .add({
    targets: ".button",
    width: 0,
    duration: 1
  })
  .add({
    targets: ".button",
    duration: 1,
    height: 40,
    width: 200,
    backgroundColor: "#2B2D2F",
    border: "0",
    borderRadius: 4
  })
  .add({
    targets: ".text",
    duration: 1,
    opacity: "100"
  })
  .add({
    targets: ".progress-bar",
    duration: 1,
    opacity: "0"
  });
  
  
$(".button").click(function() {
  basicTimeline.restart();
});

$(".text").click(function() {
  basicTimeline.restart();
});
