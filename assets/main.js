// Variables
const form = document.getElementById('form');
const pizzaInput = document.querySelector(".idIngresado");
const contenedorConsulta = document.getElementById('contenedorConsulta');


// Array
const pizzasLista = [
	{
		id: 1,
		nombre: "Muzzarella",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella"],
		precio: 500,
		imagen: "./assets/img/Pizza-Muzzarella-300x300.jpg"
	},
	{
		id: 2,
		nombre: "Calabresa",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella", "Calabresa"], 
		precio: 1000,
		imagen : "./assets/img/Pizza-Calabresa-300x300.jpg"
	},
	{
		id: 3,
		nombre: "Jamón y Morrón",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella", "Jamón", "Morrón"], 
		precio: 650,		
		imagen : "./assets/img/Pizza-de-Jamón-y-Morrón--300x300.jpg"
	},
	{
		id: 4,
		nombre: "Jamón y Tomate",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella", "Tomate", "Jamón"], 
		precio: 750,
		imagen : "./assets/img/Pizza-de-Jamón-y-Tomate--300x300.jpg"		
	},
	{
		id: 5,
		nombre: "Palmito",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella", "Palmito"], 
		precio: 550,
		imagen : "./assets/img/Pizza-de-Palmitos--300x300.jpg"		
	},
	{
		id: 6,
		nombre: "Fugazzeta",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella", "Cebolla Caramelizada"], 
		precio: 950,	
		imagen : "./assets/img/Pizza-Fugazzeta--300x300.jpg"	
	},
	{
		id: 7,
		nombre: "Pizza Napolitana",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella", "Aceitunas", "Tomates"],
		precio: 500,
		imagen: "./assets/img/Pizza-Napolitana--300x300.jpg"
	},
	{
		id: 8,
		nombre: "Panceta",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella", "Panceta", "Aceitunas"], 
		precio: 1000,
		imagen : "./assets/img/Pizza-Panceta--300x300.jpg"
	},
	{
		id: 9,
		nombre: "Roquefort",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella", "Roquefort", "Aceitunas"], 
		precio: 650,		
		imagen : "./assets/img/Pizza-Roquefort--300x300.jpg"
	},
	{
		id: 10,
		nombre: "Provolone",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella", "Provolone", "Aceitunas"], 
		precio: 750,
		imagen : "./assets/img/Pizza-Provolone-300x300.jpg"		
	},
	{
		id: 11,
		nombre: "Super Calabresa",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella", "Calabresa", "Aceitunas Negras"], 
		precio: 1550,
		imagen : "./assets/img/Pizza-Super-Calabresa--300x300.jpg"		
	},
];


// Renderiza elementos
const crearPizza = (pizza) => {
	if(!pizza){
		contenedorConsulta.innerHTML = `
		<div class="card errorIdDiv">
			<h2 class="pizza-title">¡No coincide el numero!</h2>
		</div>
		`;
	}else {
		contenedorConsulta.innerHTML =  `
			<div class="card">
				<h2 class="pizza-title">PIZZA DE ${pizza.nombre.toUpperCase()}</h2>
				<h3 class="pizza-ingredientes"> Ingredientes: <small>${pizza.ingredientes.join(', ')}</small></h3>
				<h3 class="pizza-price">Precio: $${pizza.precio}</h3>
				<img class="pizzaImg" src="${pizza.imagen}" alt="pizza de ${pizza.nombre}">
			</div>
		`;
	}
};

const crearErrorCard = () => {
    contenedorConsulta.innerHTML = `
        <div class="card errorVacioDiv">
            <h2 class="pizza-title">¡Debe ingresar un numero!</h2>
        </div>
    `;
};

// Función que buscar en el array el valor ingresado
const pizzaEncontrada = (valor) => pizzasLista.find((pizza) => pizza.id === valor);

// Función buscar pizza
const submitSearch = (e) => {
    e.preventDefault();
    const idIngresado = pizzaInput.value;

	if(!idIngresado) {
		crearErrorCard();
		return;
	}
	const pizzaBuscada = pizzaEncontrada(Number(idIngresado));
	crearPizza(pizzaBuscada);
	// Guarda en el LocalStorage la pizza que ha traído el valor ingresado
	saveLocalStorage(pizzaBuscada);
	form.reset();
};

// Grabar en LS
const saveLocalStorage = (pizzasLista) => {
  localStorage.setItem('pizzaData', JSON.stringify(pizzasLista))
};

// Inicializar
const init = () => {
    form.addEventListener("submit", submitSearch)
	// Busca los datos guardados en LS y luego con la funcion renderizar, crea la card con los datos del LS
	let pizzaLocalGuardado = JSON.parse(localStorage.getItem('pizzaData')) || [];
	if(pizzaLocalGuardado){	
		crearPizza(pizzaLocalGuardado);
	}
};

init();