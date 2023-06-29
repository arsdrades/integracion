async function apiRick() {
  try {
    const apiUrl = 'https://3333-2803-c180-2101-3112-d1f3-7b96-9cd2-3ee.ngrok-free.app/producto'; // Endpoint de tu servidor intermedio
    const apiResponse = await fetch(apiUrl);
    const data = await apiResponse.json();
    console.log(data);
    const divRes = document.querySelector('#resultado');
    data.results.forEach((producto) => {
      const divItem = document.createElement('div');
      divItem.innerHTML = `       
          <div class="row">
            <div class="four columns">
              <div class="card">
                <img src="" >
                <div class="info-card">
                  <h4>${producto.nombre}</h4>
                  <p>Felipe Villaroel</p>
                  <p class="precio">$20.000  <span class="u-pull-right ">$15.000</span></p>
                  <a href="#"class="u-full-width text-light bg-dark button input agregar-carrito"  data-id="1">Agregar Al Carrito</a>
                </div>
              </div> <!--.card-->
            </div>
          </div>`;
      divRes.appendChild(divItem);
    });
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
  }
}

apiRick();