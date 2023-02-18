
document.getElementById('first-area').addEventListener('click', function() {

    const areaName = document.getElementById('first-name').innerText;

    const firstInput = document.getElementById('first-input').value;
    
    const secondInput = document.getElementById('second-input').value;

    const total = parseInt(firstInput) * parseInt(secondInput);

    displayData(areaName, firstInput, secondInput, total);
    //console.log(typeof firstInput, typeof secondInput);
});





// common functon to display data
function displayData(nameOfT, valueOfT, btnOfT) {
    const container = document.getElementById('table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfT}</td>
    <td>${valueOfT}</td>
    <td>${btnOfT}</td>
    `
    container.appendChild(tr);
}