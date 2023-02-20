// Write your code here!
const mainElement = document.getElementById("main");
mainElement.remove();

const newHeader = document.createElement("h1");
//document.body.append(newHeader);
newHeader.id = 'victory';
newHeader.textContent = "CHATTIE is the champion";