const arrays = [
    [1, 2, 3, 4, 5],
    ['apple', 'banana', 'orange'],
    [true, false, true],
    [10, 20, 30, 40],
    ['car', 'bike', 'bus'],
    [null, undefined, 0],
    ['red', 'green', 'blue'],
    [100, 200, 300, 400, 500],
    ['pizza', 'burger', 'sushi'],
    [3.14, 1.618, 2.718]
];

function displayArrays() {
    const arrayList = document.getElementById('arrays-list');
    arrays.forEach((arr, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Array ${index + 1}: ${arr.join(', ')}`;
        arrayList.appendChild(listItem);
    });
}
window.onload = () => {
    displayArrays();
    displayObjects();
};