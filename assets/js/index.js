precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let suma = document.querySelector("#suma")
let resta = document.querySelector("#resta")


suma.addEventListener("click", () => {
    let cantidadItem = document.querySelector(".cantidad");
    let sumarItem = parseInt(cantidadItem.innerHTML) + 1;
    cantidadItem.innerHTML = sumarItem;

    let TotalItem = document.querySelector(".valor-total");
    let multiplicacion = precio * sumarItem;
    TotalItem.innerHTML = multiplicacion;

})

resta.addEventListener("click", () => {
    let cantidadItem = document.querySelector(".cantidad");
    let restarItem = parseInt(cantidadItem.innerHTML) - 1;
    cantidadItem.innerHTML = restarItem;

    let TotalItem = document.querySelector(".valor-total");
    let multiplicacion = precio * restarItem;
    TotalItem.innerHTML = multiplicacion;

})