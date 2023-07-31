// common function for random backgroun color change 

function getRandomColor() {

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);


  const hex = '#' + r.toString(16) + g.toString(16) + b.toString(16);

  return hex;
}

const allGeometry = document.getElementsByClassName('cart-1');

for (const item of allGeometry) {
  item.addEventListener('mouseenter', function () {
      item.style.backgroundColor = getRandomColor();
      item.style.transition = 'all ease 1s';
  });
}




//Triangle

document.getElementById('first-cart').addEventListener('click',function(){


  const triangleName = document.getElementById('Triangle').innerText;
  const fieldb = document.getElementById('input-field-b').value;
  const fieldh = document.getElementById('input-field-h').value;

  if( parseFloat(fieldb) <= 0 || parseFloat(fieldh ) <=0){
    alert('Enter The Valid Number');
  }
  else{
    const totalQuantity = 0.5* parseFloat(fieldb) * parseFloat(fieldh);
    getData(triangleName,totalQuantity )
  };







function getData(triangleName,totalQuantity ){
  serialNo++;
  const container = document.getElementById('table-container');
  const tr = document.createElement('tr');
  tr.innerHTML =  `
  <td>${serialNo}</td>
  <td class="designe">${triangleName}</td>
  <td class="designe">${totalQuantity} cm<sup>2</sup> </td>
  
  <td> <button id"convert-button" class="convert-button">convert m<sup>2</sup></button></td>
  
  `

  container.appendChild(tr);
}

})

// rectangle


document.getElementById('second-cart').addEventListener('click',function(){


  const rectangleName = document.getElementById('rectangle').innerText;
  const fieldw = document.getElementById('input-field-w').value;
  const fieldl = document.getElementById('input-field-l').value;

if (parseFloat(fieldw) <=0 || parseFloat(fieldl) <= 0) {
  alert('Enter The Valid Number');
}
else{
  const totalQuantity = parseFloat(fieldw) * parseFloat(fieldl);
  rectangleData(rectangleName, totalQuantity);
}








function rectangleData(rectangleName, totalQuantity){
  const container = document.getElementById('table-container');
    serialNo++;
    const tr = document.createElement('tr');
    tr.innerHTML =  `
    <td>${serialNo}</td>
    <td class="designe">${rectangleName}</td>
    <td class="designe">${totalQuantity} cm<sup>2</sup> </td>
    
    <td> <button id"convert-button" class="convert-button">convert m<sup>2</sup></button></td>
    
    `
  
    container.appendChild(tr);

}

});




// parallelogram calculation

document.getElementById('third-cart').addEventListener('click',function(){
const parallelogramName = document.getElementById('parallelogram').innerText;
const inputField1 = document.getElementById('input-field-first').innerText;

const inputField2 = document.getElementById('input-field-second').innerText;
// console.log(typeof inputField1, typeof inputField2);

totalQuantity = parseFloat(inputField1) * parseFloat(inputField2);

parallelogramData(parallelogramName, totalQuantity)


function parallelogramData(parallelogramName, totalQuantity){
  serialNo++;
  const container = document.getElementById('table-container');
const tr = document.createElement('tr');
tr.innerHTML =  `
  <td>${serialNo}</td>
  <td class="designe">${parallelogramName}</td>
  <td class="designe">${totalQuantity} cm<sup>2</sup> </td>
  
  <td> <button id"convert-button" class="convert-button">convert m<sup>2</sup></button></td>
  
  `
  container.appendChild(tr);
}


});

// Rhombus calculation

document.getElementById('forth-cart').addEventListener('click',function(){
  const rhombusName = document.getElementById('rhombus').innerText;
  const inputField1 = document.getElementById('rhombus-input-first').innerText;
  const half = document.getElementById('half').innerText;
  const inputField2 = document.getElementById('rhombus-input-second').innerText;
  // console.log(typeof inputField1, typeof inputField2);
  
  totalQuantity =parseFloat(half)*parseFloat(inputField1) * parseFloat(inputField2);

  
rhomnusData(rhombusName, totalQuantity);



 function rhomnusData(rhombusName, totalQuantity){

  serialNo++;
  const container = document.getElementById('table-container');
  const tr = document.createElement('tr');
  tr.innerHTML =  `
    <td>${serialNo}</td>
    <td class="designe">${rhombusName}</td>
    <td class="designe">${totalQuantity} cm<sup>2</sup> </td>
    
    <td> <button id"convert-button" class="convert-button">convert m<sup>2</sup></button></td>
    
    `
    container.appendChild(tr);


 }




  });

// pentagon calculation
// get data
document.getElementById('cart-fifth').addEventListener('click',function(){
  const pentagonName = document.getElementById('pentagon').innerText;
  const inputField1 = document.getElementById('pentagon-input-first').innerText;
  const half = document.getElementById('half2').innerText;
  const inputField2 = document.getElementById('pentagon-input-second').innerText;
  // console.log(typeof inputField1, typeof inputField2);
  
  totalQuantity =parseFloat(half)* parseFloat(inputField1) * parseFloat(inputField2);

  showMyData(pentagonName, totalQuantity);
  // show data




  function showMyData(pentagonName, totalQuantity){
    serialNo++;
    const container = document.getElementById('table-container');
  const tr = document.createElement('tr');
  tr.innerHTML =  `
    <td>${serialNo}</td>
    <td class="designe">${pentagonName}</td>
    <td class="designe">${totalQuantity} cm<sup>2</sup> </td>
    
    <td> <button id"convert-button" class="convert-button">convert m<sup>2</sup></button></td>
    
    `
    container.appendChild(tr);
  }
  
  });


// ellipse calculation 

//  six number cart calculation
document.getElementById('sixth-cart').addEventListener('click',function(){

  // get the data
  const ellipseName = document.getElementById('ellipse').innerText;
  const inputField1 = document.getElementById('ellipse-input-first').innerText;
  const half = document.getElementById('half2').innerText;
  const inputField2 = document.getElementById('ellipse-input-second').innerText;

  
  totalQuantity = 3.1416 * parseFloat(inputField1) * parseFloat(inputField2);


// show the data
displayData( ellipseName, totalQuantity);

  });

  let serialNo = 0;
  function displayData(ellipseName, totalQuantity){
    serialNo++;
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML =  `
      <td>${serialNo}</td>
      <td class="designe">${ellipseName}</td>
      <td class="designe">${totalQuantity} cm<sup>2</sup> </td>
      
      <td> <button id"convert-button" class="convert-button">convert m<sup>2</sup></button></td>
      
      `
      container.appendChild(tr);
  }