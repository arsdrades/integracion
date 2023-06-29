// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaCursos.addEventListener('click', agregarCurso);

     // Cuando se elimina un curso del carrito
     carrito.addEventListener('click', eliminarCurso);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}


// Funciones
// Función que añade el curso al carrito
function agregarCurso(e) {
    e.preventDefault();
    // Delegation para agregar-carrito
    if(e.target.classList.contains('agregar-carrito')) {
         const curso = e.target.parentElement.parentElement;
         // Enviamos el curso seleccionado para tomar sus datos
         leerDatosCurso(curso);
    }
}

// Lee los datos del curso
function leerDatosCurso(curso) {
    const infoCurso = {
         imagen: curso.querySelector('img').src,
         titulo: curso.querySelector('h4').textContent,
         precio: curso.querySelector('.precio span').textContent,
         id: curso.querySelector('a').getAttribute('data-id'), 
         cantidad: 1
    }


    if( articulosCarrito.some( curso => curso.id === infoCurso.id ) ) { 
         const cursos = articulosCarrito.map( curso => {
              if( curso.id === infoCurso.id ) {
                   curso.cantidad++;
                    return curso;
               } else {
                    return curso;
            }
         })
         articulosCarrito = [...cursos];
    }  else {
         articulosCarrito = [...articulosCarrito, infoCurso];
    }

    // console.log(articulosCarrito)

    

    // console.log(articulosCarrito)
    carritoHTML();
}

// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso') ) {
         // e.target.parentElement.parentElement.remove();
         const cursoId = e.target.getAttribute('data-id')
         
         // Eliminar del arreglo del carrito
         articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

         carritoHTML();
    }
}


// Muestra el curso seleccionado en el Carrito
function carritoHTML() {

    vaciarCarrito();

    articulosCarrito.forEach(curso => {
         const row = document.createElement('tr');
         row.innerHTML = `
              <td>  
                   <img src="${curso.imagen}" width=100>
              </td>
              <td>${curso.titulo}</td>
              <td>${curso.precio}</td>
              <td>${curso.cantidad} </td>
              <td>
                   <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
              </td>
         `;
         contenedorCarrito.appendChild(row);
    });

}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
    // forma lenta
    // contenedorCarrito.innerHTML = '';


    // forma rapida (recomendada)
    while(contenedorCarrito.firstChild) {
         contenedorCarrito.removeChild(contenedorCarrito.firstChild);
     }
}
/*
function getCharacters(done) {

     const results = fetch("http://127.0.0.1:3000/productos");

     results.then(response => response.json())
     .then(data => {
          done(data);
     })
}

getCharacters(data => {
     data.results.forEach(productos =>{
          const article = document.createRange().createContextualFragment(/*html`
          <article>
          <div class="four columns">
          <div class="card">
              <img src="${productos.nombre}" >
              <div class="info-card">
                  <h4>${productos.name}</h4>
                  <p>${productos.gender}</p>
                  <p class="precio">$20.000  <span class="u-pull-right ">$15.000</span></p>
                  <a href="#"class="u-full-width text-light bg-dark button input agregar-carrito"  data-id="1">Agregar Al Carrito</a>
              </div>
          </div> <!--.card-->
      </div>
      </article>
          `

          );
          const main = document.querySelector("main");

          main.append(article);
     })
})

*/



const apiRick=async () =>{
     let url="http://127.0.0.1:3000/productos";
     const api = await fetch(url);
     const data= await api.json();
     console.log(data);
     divRes=document.querySelector('#resultado')
     data.results.map(item=>{
          divItem=document.createElement('div')
          divItem.innerHTML= `       
           <div class="row">
          <div class="four columns">
              <div class="card">
                  <img src="" >
                  <div class="info-card">
                      <h4>${productos.nombre}</h4>
                      <p>Felipe Villaroel</p>
                      <p class="precio">$20.000  <span class="u-pull-right ">$15.000</span></p>
                      <a href="#"class="u-full-width text-light bg-dark button input agregar-carrito"  data-id="1">Agregar Al Carrito</a>
                  </div>
              </div> <!--.card-->
          </div>
        </div>`
          ;
     });
 }
 
 apiRick(1)