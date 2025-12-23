import React from "react";

const SocialButton = ({ href, label, icon }) => (
    <a
        className="btn btn-outline-light btn-sm rounded-circle footer-social"
        href={href}
        aria-label={label}
        target="_blank"
        rel="noreferrer"
        title={label}
    >
        <span className="footer-icon" aria-hidden="true">
        {icon}
        </span>
    </a>
);

    const FooterLink = ({ href, children }) => (
  <li className="mb-2">
    <a className="footer-link" href={href}>
      {children}
    </a>
  </li>
);

const Footer = () => {

   const year = new Date().getFullYear();
    return(
      <footer className="footer bg-dark text-light pt-5 mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <h5 className="mb-3">Relatos de Papel</h5>
            <p className="text-secondary mb-3">
              Descubre, guarda y compra tus relatos favoritos. Lectura simple,
              recomendaciones y una experiencia rápida.
            </p>

            <div className="d-flex gap-2">
              <SocialButton href="https://github.com/" label="GitHub" icon="GH" />
              <SocialButton href="https://linkedin.com/" label="LinkedIn" icon="in" />
              <SocialButton href="https://x.com/" label="X" icon="X" />
              <SocialButton href="https://instagram.com/" label="Instagram" icon="IG" />
            </div>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="text-uppercase text-secondary mb-3">Producto</h6>
            <ul className="list-unstyled">
              <FooterLink href="/catalogo">Catálogo</FooterLink>
              <FooterLink href="/recomendaciones">Recomendaciones</FooterLink>
              <FooterLink href="/carrito">Carrito</FooterLink>
              <FooterLink href="/novedades">Novedades</FooterLink>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="text-uppercase text-secondary mb-3">Compañía</h6>
            <ul className="list-unstyled">
              <FooterLink href="/sobre-nosotros">Sobre nosotros</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/contacto">Contacto</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <h6 className="text-uppercase text-secondary mb-3">Newsletter</h6>
            <p className="text-secondary">
              Recibe novedades y recomendaciones cada semana.
            </p>

            <form
              className="d-flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                className="form-control footer-input"
                placeholder="tuemail@correo.com"
                required
              />
              <button type="submit" className="btn btn-primary">
                Suscribirme
              </button>
            </form>

            <small className="text-secondary d-block mt-2">
              Al suscribirte aceptas recibir correos (puedes salir cuando quieras).
            </small>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pb-4 gap-2">
          <small className="text-secondary">
            © {year} Relatos de Papel. Todos los derechos reservados.
          </small>

          <div className="d-flex gap-3">
            <a className="footer-link small" href="/privacidad">
              Privacidad
            </a>
            <a className="footer-link small" href="/terminos">
              Términos
            </a>
            <a className="footer-link small" href="/cookies">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
    );

};

export default Footer;