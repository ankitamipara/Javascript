const objects = [
    { name: "John", age: 30 },
    { product: "Laptop", price: 1500 },
    { country: "India", population: 1400000000 },
    { city: "Paris", famousFor: "Eiffel Tower" },
    { animal: "Tiger", species: "Panthera tigris" },
    { car: "Tesla", model: "Model S" },
    { movie: "Inception", director: "Christopher Nolan" },
    { book: "1984", author: "George Orwell" },
    { sport: "Soccer", players: 11 },
    { planet: "Mars", distanceFromEarth: "225 million km" }
];

function displayObjects() {
    const objectList = document.getElementById('objects-list');
    objects.forEach((obj, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Object ${index + 1}: ${JSON.stringify(obj)}`;
        objectList.appendChild(listItem);
    });
}
window.onload = () => {
    displayArrays();
    displayObjects();
};