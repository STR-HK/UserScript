// Create a script element
var scriptElement = document.createElement('script');

// Set the source URL for the script
scriptElement.src = 'https://cdn.blobity.dev/by.js';

console.log(scriptElement)

// Function to be executed after the script is loaded
function runNewScript() {
  
  // Your new script code here
  var scriptElement2 = document.createElement('script');
// Set the script content
var scriptContent = `
  const blobity = new Blobity({
    opacity: 0.35,
    dotColor: 'rgb(110, 110, 110)',
    focusableElements: 'button, select, a, input, ytd-menu-service-item-renderer, div.ytp-menuitem, yt-chip-cloud-chip-renderer, tp-yt-paper-button'
  });

  blobity.canvas.style.zIndex = 1100000;
`;

// Set the innerHTML of the target element with the script
scriptElement2.innerHTML = scriptContent;
  
  console.log(scriptElement2)
  
  document.head.appendChild(scriptElement2);


}

// Set the onload event handler
scriptElement.onload = runNewScript;

// Append the script element to the HTML document's head or body
document.head.appendChild(scriptElement);
