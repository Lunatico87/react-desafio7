import React from 'react'

const Footer = () => {
  return (
    <>
      <footer class="bg-black">
    <div class="row align-items-center px-5">
      <div class="col-6 col-md-3 mb-3 text-white">
        <img src="https://dummyimage.com/150x100/000/fff" alt="Logo" class="img-fluid" />
        <ul class="flex-column mx-3">
          <li class=" mb-2">Dirección: Av. Los Andes 123</li>
          <li class=" mb-2">Teléfono: 123456789</li>
          <li class=" mb-2">Correo electrónico: pato@vibeon.com</li>
        </ul>
      </div>


      <div class="col-6 col-md-3  text-white">
        <ul class="nav flex-column mx-md-5 pt-3">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Quienes Somos</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Todos los productos</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Contáctanos</a></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 align-self-center text-white">
        <form>
          <h5>Subscribete ahora!</h5>
          <p>Mensualmente recibiras nuestras mejores ofertas</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Correo electrónico</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Correo electrónico" />
            <button class="btn btn-primary" type="button">Subscribir</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-center py-1  border-top">
      <p>© 2025 Lunaros, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-white" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li class="ms-3"><a class="link-white" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a class="link-white" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </div>
  </footer>
    </>
  )
}

export default Footer