let carrito = {};

btnip.addEventListener("click", () => {
  console.log(btnip.checked);
});

/*
servicios//adicionales
"id": ,
"nombre": "",
"lleno": "",
"descuento": "",
*/

//[c4,c2,personal,claro]

const listaSSJJunio = {
  Servicios: [
    { id: "btntv", nombre: "Tv", lleno: [	'3600',	'2690',	'3600',	'2900'], descuento: [	'2160'	,	'2690'	,	'3600'	,	'2900'	] },
    { id: "btnhd", nombre: "HD", lleno: ['790',0,0,0], descuento: ['470',0,0,0] },
  ],
  Internet: [
    { id: "btn50", nombre: "50mb", lleno: [	4900	,	2550	,	4954	,	7000	], descuento: [	2570	,	2550	,	1899	,	2780	] },
    { id: "btn100", nombre: "100mb", lleno: [	5690	,	4290	,	7862	,	5690	], descuento: [	2990	,	2575	,	3499	,	2990	] },
    { id: "bnt300", nombre: "300mb", lleno: [	8490	,	4890	,	8354	,	10900	], descuento: [	3690	,	2750	,	3899	,	4089	] },
    { id: "bnt500", nombre: "500mb", lleno: [	25400	,	25400	,	10410	,	13100	], descuento: [	25400	,	25400	,	4799	,	5090	] },
  ],
  Adicionales: [
    { id: "btnadd", nombre: "Go+ adicional", lleno: 450, descuento: 450 },
    { id: "btnfutbol", nombre: "Futbol", lleno: 3030, descuento: 3030 },
    { id: "btnhbo", nombre: "HBO", lleno: 1215, descuento: 1215 },
    { id: "btnad", nombre: "Adultos", lleno: 300, descuento: 300 },
    { id: "btnip", nombre: "Ip Fija", lleno: 4560, descuento: 4560 },
  ],
};
const test = (lista) => {
  acc = "";
  lista.servicios.map((item) => {
    console.log(item.nombre);
    acc += item.nombre;
    acc += " ";
  });
  combo.innerText = acc;
};

//test(listaSSJJunio)

//errro con btn tipo radio
const setCarrito = (item, flag) => {
  //console.log(carrito);
  if (flag) {
    carrito[item.id] = { ...item };
  } else {
    delete carrito[item.id];
  }
  console.log(carrito);
};

/********************************************
 * Tabla*
 *******************************************/
const setTabla = (datos) => {
  //console.log(datos)
  let tableCombo = document.getElementById("combo");
  let tableLleno = document.getElementById("lleno");
  let tableDetalle = document.getElementById("detalle");
  let tablePromo = document.getElementById("promo");
  let tableDescuento = document.getElementById("descuento");
  let combo = "";
  let lleno = 0;
  let detalle = '';
  let promo = 0;
  let descuento = '';
  //c2
  let c2tableLleno = document.getElementById("c2-lleno");
  let c2tableDetalle = document.getElementById("c2-detalle");
  let c2tablePromo = document.getElementById("c2-promo");
  let c2tableDescuento = document.getElementById("c2-descuento");
  let c2combo = "";
  let c2lleno = 0;
  let c2detalle = '';
  let c2promo = 0;
  let c2descuento = '';
  //pp
  let pptableLleno = document.getElementById("pp-lleno");
  let pptableDetalle = document.getElementById("pp-detalle");
  let pptablePromo = document.getElementById("pp-promo");
  let pptableDescuento = document.getElementById("pp-descuento");
  let ppcombo = "";
  let pplleno = 0;
  let ppdetalle = '';
  let pppromo = 0;
  let ppdescuento = '';
  //cl
  let cltableLleno = document.getElementById("cl-lleno");
  let cltableDetalle = document.getElementById("cl-detalle");
  let cltablePromo = document.getElementById("cl-promo");
  let cltableDescuento = document.getElementById("cl-descuento");
  let clcombo = "";
  let cllleno = 0;
  let cldetalle = '';
  let clpromo = 0;
  let cldescuento = '';




  for (item in datos) {
    precio = parseInt(datos[item].lleno)
    precioff = parseInt(datos[item].descuento)
    combo += datos[item].nombre + " ";
    lleno += precio;
    detalle += datos[item].nombre+' '+precio+' ' ;
    promo += precioff
    descuento += datos[item].nombre+' '+precioff+' ' ;
    //c2
    precio = parseInt(datos[item].c2lleno)
    precioff = parseInt(datos[item].c2descuento)
    c2lleno += precio;
    c2detalle += datos[item].nombre+' '+precio+' ' ;
    c2promo += precioff
    c2descuento += datos[item].nombre+' '+precioff+' ' ;
    //pp
    precio = parseInt(datos[item].pplleno)
    precioff = parseInt(datos[item].ppdescuento)
    pplleno += precio;
    ppdetalle += datos[item].nombre+' '+precio+' ' ;
    pppromo += precioff
    ppdescuento += datos[item].nombre+' '+precioff+' ' ;
    //cl
    precio = parseInt(datos[item].cllleno)
    precioff = parseInt(datos[item].cldescuento)
    cllleno += precio;
    cldetalle += datos[item].nombre+' '+precio+' ' ;
    clpromo +=precioff
    cldescuento += datos[item].nombre+' '+precioff+' ' ;
  }

  console.log(`combo`,combo);
  tableCombo.innerText = combo;
  tableLleno.innerText = '$'+lleno;
  tableDetalle.innerText = detalle;
  tablePromo.innerText = '$'+promo;
  tableDescuento.innerText = descuento;
  //c2
  c2tableLleno.innerText = '$'+c2lleno;
  c2tableDetalle.innerText = c2detalle;
  c2tablePromo.innerText = '$'+c2promo;
  c2tableDescuento.innerText = c2descuento;
  //pp
  pptableLleno.innerText = '$'+pplleno;
  pptableDetalle.innerText = ppdetalle;
  pptablePromo.innerText = '$'+pppromo;
  pptableDescuento.innerText = ppdescuento;
  //cl
  cltableLleno.innerText = '$'+cllleno;
  cltableDetalle.innerText = cldetalle;
  cltablePromo.innerText = '$'+clpromo;
  cltableDescuento.innerText = cldescuento;
};

/********************************************
 * lISTENER*
 ***************/

document.addEventListener("click", (evt) => {
  if (evt.target.tagName === "INPUT" && evt.target.className === "btn-check") {
    //console.log(evt.target.checked)
    //console.log(evt.target.dataset)
    setCarrito(evt.target.dataset, evt.target.checked);
    //mostrar en tabla
    setTabla(carrito);
  }
  /* borrar todo
    if (evt.target.id === "borrar") {
        carrito = {}
        console.log(carrito)
    }*/
});

/********************************************
 * DIBUJAR*
 ***************/
window.addEventListener("load", (evt) => {
  //agregar localidad
  let botonera = document.querySelector(".botonera");
  botonera.innerHTML = ``;
  let fragment = "";
  for (categoria in listaSSJJunio) {
    fragment += `<h3>${categoria}</h3>`;
    fragment += `<div class="row "><div class="d-grid gap-1">
        `;

    //console.log(categoria)
    listaSSJJunio[categoria].map(
      (item) =>
      // console.log(item.nombre)
      (fragment += `
        <input 
          type="checkbox" 
          class="btn-check" 
          id=${item.id} 
          data-id=${item.id} 
          data-nombre=${item.nombre} 
          data-lleno=${item.lleno[0]} 
          data-c2lleno=${item.lleno[1]} 
          data-pplleno=${item.lleno[2]} 
          data-cllleno=${item.lleno[3]} 
          data-descuento=${item.descuento[0]} 
          data-c2descuento=${item.descuento[1]} 
          data-ppdescuento=${item.descuento[2]} 
          data-cldescuento=${item.descuento[3]} 
          autocomplete="off" />
        <label class="btn btn-outline-info" for=${item.id}>${item.nombre}</label>
        `)
    );
    fragment += `</div></div>`;
  }
  botonera.innerHTML = fragment;
});

/********************************************
 * editor*
 ***************/

const editor = (lista) =>{
  //console.log(lista)
  let servicio = document.getElementById('servicio')
  document.getElementById('prestataria')
  document.getElementById('referencia')
  document.getElementById('lleno')
  document.getElementById('porcentaje-aumento')
  document.getElementById('descuento')
  document.getElementById('porcentaje-descuento')
  servicio.addEventListener('change',(evt)=>{

    console.log(servicio.value)
  })
}

editor(listaSSJJunio)
