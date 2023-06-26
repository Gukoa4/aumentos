const listaJun2023 = {
  listaSalvador: {
    Cable: [
      {
        titulo: "TV",
        precio: 3600,
        descuentos: true,
      },
      {
        titulo: "Go/IPTV",
        precio: 790,
        descuentos: true,
      },
      {
        titulo: "Go Adicional",
        precio: 450,
      },
      { titulo: "Futbol", precio: 2800 },
      { titulo: "HBO", precio: 1215 },
      { titulo: "Adultos", precio: 300 },
      { titulo: "IP Fija", precio: 4560 },
      {
        titulo: "50MB",
        precio: 4900,
        descuentos: true,
      },
      {
        titulo: "UI-776 100MB",
        precio: 5690,
        descuentos: true,
      },
      {
        titulo: "UI-740 100MB",
        precio: 6870,
        descuentos: true,
      },

      {
        titulo: "200MB",
        precio: 13420,
        descuentos: true,
      },
      {
        titulo: "300MB",
        precio: 8490,
        descuentos: true,
      },
      {
        titulo: "500MB",
        precio: 25400,
      },
      {
        titulo: "10MB",
        precio: 3190,
      },
      {
        titulo: "20MB",
        precio: 3380,
      },
      {
        titulo: "30MB",
        precio: 3760,
      },
    ],
  },
  listaPalpala: {
    Cable: [
      {
        titulo: "TV",
        precio: 2480,
        descuentos: true,
      },
      {
        titulo: "Go/IPTV",
        precio: 700,
        descuentos: true,
      },
      {
        titulo: "Go Adicional",
        precio: 370,
      },
      { titulo: "Futbol", precio: 2800 },
      { titulo: "HBO", precio: 1215 },
      { titulo: "Adultos", precio: 300 },
      { titulo: "IP Fija", precio: 4560 },
      {
        titulo: "50MB",
        precio: 3850,
      },
      {
        titulo: "UI-788 100MB",
        precio: 5750,
        descuentos: true,
      },
      {
        titulo: "200MB",
        precio: 7400,
        descuentos: true,
      },
      {
        titulo: "300MB",
        precio: 8500,
        descuentos: true,
      },
      {
        titulo: "20MB",
        precio: 3100,
      },
    ],
  },
};

const cabeceras = [
  "Producto",
  "Precio",
  "% Aumento",
  "$ con aumento",
  "% descuento",
  "$ actual con descuento",
  "$ nuevo con descuento",
];

let localidad = document.querySelector("#localidad");

const carga = (lista) => {
  let listaActual = lista.listaSalvador;
  listaActual.Cable.map((item) => {
    let tableR = document.createElement("tr");
    tableR.setAttribute("id", item.titulo);
    tableR.innerHTML = `
    <td>${item.titulo}</td> 
    <td>
        <label for="precio">$</label>
            <input type="number" id="precio${item.titulo}" name="precio" value=${item.precio}>
    </td>
     <td>
         <input type="number" id="porcentaje${item.titulo}" name="porcentaje" min="0" max="100" value="0">
         <label for="porcentaje">%</label>
    </td>
     <td>${item.precio}</td>
     <td>
     <input type="number" id="descuento${item.titulo}" name="descuento" min="0" max="100" value="0">
     <label for="descuento">%</label>
      </td>
     <td>${item.precio}</p>
     <td>${item.precio}</td>`;
    tablep.appendChild(tableR);
  });
};

const headers = (cabeceras) => {
  let tableR = document.createElement("tr");

  cabeceras.map((item) => {
    let tableH = document.createElement("th");
    tableH.innerText = item;
    tableR.appendChild(tableH);
  });
  tablep.appendChild(tableR);
};

headers(cabeceras);
carga(listaJun2023);

/************************************************************************
___________________________Event Listener_____________________________
*************************************************************************/

document.addEventListener("click", (e) => {
  //e.target.tagName === "INPUT"
  //console.log(e.target)
  //############### input ###############
  if (e.target.tagName === "INPUT") {
    //console.log(e.target.valueAsNumber)
    //console.log('es un input y su padre es:', e.target.parentNode.parentNode )
    actualizar(e.target.parentNode.parentNode);
  }
});

//cambiar los valores de una fila
const actualizar = (fila) => {
  //toma los valores y los actualiza
  console.log('entramos',fila)
  //console.log('entramos',fila.children[1].children[1].valueAsNumber)
  //variables
  let precio = fila.children[1].children[1].valueAsNumber;
  let aumento = fila.children[2].children[0].valueAsNumber;
  let descuento = fila.children[4].children[0].valueAsNumber;
  console.log(precio, aumento, descuento);
  //cells 1,2,4 variables
  //cells 1 children 1 value
  let precioAum= precio*(aumento+100)/100
  let actualDes=precio*(100-descuento)/100
  let nuevoDes=precioAum*(100-descuento)/100

  // resultados 3,5,6 innerText
  fila.children[3].innerText=precioAum;
  fila.children[5].innerText=actualDes;
  fila.children[6].innerText=nuevoDes;
};
