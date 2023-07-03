document.addEventListener("change", (e) => {
    if (e.target.tagName === "INPUT") {
        actualizar();
    }
});

const actualizar = () => {
    let valorPrecio, valorAumento, valorDescuento;
    console.log(
        precio.valueAsNumber,
        aumento.valueAsNumber,
        descuento.valueAsNumber
    );
    isNaN(precio.valueAsNumber)
        ? (valorPrecio = 0)
        : (valorPrecio = precio.valueAsNumber);
    isNaN(aumento.valueAsNumber)
        ? (valorAumento = 0)
        : (valorAumento = aumento.valueAsNumber);
    isNaN(descuento.valueAsNumber)
        ? (valorDescuento = 0)
        : (valorDescuento = descuento.valueAsNumber);
    let descuentos = [0, 20, 30, 40, valorDescuento];
    console.log("valor precio", valorPrecio);
    console.log(" valorAumento", valorAumento);
    console.log(" valorDescuento", valorDescuento);
    tablebody.innerHTML = '';
    descuentos.map((item) => {
        let antes,ahora,diferencia;
        antes=parseFloat(valorPrecio * (100 - item) / 100).toFixed(2);
        ahora=parseFloat((valorPrecio * (valorAumento + 100) / 100) * (100 - item) / 100).toFixed(2);
        diferencia=parseFloat(ahora-antes).toFixed(2);

        let tableRow = document.createElement("tr");
        tableRow.innerHTML = `
           <td>Descuento ${item}%</td> 
           <td>$${antes}</td> 
           <td>$${ahora}</td> 
           <td>$${diferencia}</td>
           
               `;
        tablebody.appendChild(tableRow);

    });
};
