const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
header.innerHTML = 
`<header class="header">
<section class="contenedor_superior">
    <section class="contenedor_soporte">
        <i class="fa-solid fa-headset"></i>
        <section class="contenedor_soporte_datos">
            <span class="text">Soporte al Cliente</span>
            <span class="numero">5555-1245</span>
        </section>
    </section>
    <section class="contenedor_logo">
        <i class="fa-solid fa-mug-hot"></i>
        <h1 class="logo"><a href="./index.html">Cafe Codo a Codo</a></h1>
    </section>
    <section class="contenedor_carrito">
        <a href="./contacto.html" class="fa-solid fa-user"></a>
        <a href="./contacto.html" class="contenedor_registra">Contacto</a>
      </section>
</section>
<section class="contenedor_navbar">
    <nav class="navbar">
        <ul class="menu">
            <li><a href="./index.html">Inicio</a></li>
            <li><a href="./historia.html">Historia</a></li>
            <li><a href="./menu.html">Menu</a></li>
            <li><a href="./contacto.html">Contacto</a></li>
        </ul>
    </nav>
</section>
</header>`

footer.innerHTML=
` <footer class="footer">
<section class="contenedor_footer">
  <section class="contenedor_info">
    <section class="contenedor_contacto">
      <p class="contenedor_titulo">Informacion de Contacto</p>
        <ul>
          <li>Direccion: Via Cesare Beruto, 18</li>
          <li>Telefono: 011-5555-1234</li>
          <li>Whatsapp: 11-5555-4321</li>
          <li>Email: cafecodoacodo@bar.com.ar</li>
        </ul>
    </section>
    <section class="contenedor_nos">
      <p class="contenedor_titulo">Informacion</p>
      <ul>
        <li><a href="./historia.html">Acerca de Nosotros</a></li>
        <li><a href="./politicas.html#politica">Politica de Privacidad</a></li>
        <li><a href="./politicas.html#terminos">Terminos y Condiciones</a></li>
        <li><a href="./contacto.html">Registrate</a></li>
      </ul>
    </section>
    <section class="contenedor_redes">
      <p class="contenedor_titulo">Siguenos en nuestras Redes Sociales</p>
      <ul>
        <li><a href="https://es-la.facebook.com/" target="_blank" class="fa-brands fa-facebook-f"></a></li>
        <li><a href="https://twitter.com/?lang=es" target="_blank" class="fa-brands fa-twitter"></a></li>
        <li><a href="https://www.youtube.com/" target="_blank" class="fa-brands fa-youtube"></a></li>
        <li><a href="https://ar.pinterest.com/" target="_blank" class="fa-brands fa-pinterest-p"></a></li>
        <li><a href="https://www.instagram.com" target="_blank" class="fa-brands fa-instagram"></a></li>
      </ul>
    </section>
  </section>
  <section class="copyright">
    <p>Desarrollado por el grupo 24 &copy; 2023</p>
    <p>Todos los Derechos Reservados</p>
  </section>
</section> 
</footer>`
