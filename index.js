//Remove element with 'main' id
const main = document.getElementById('main');
main.remove()

//Create a new h1
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = 'YOUR-NAME is the champion'
document.body.append(newHeader)
