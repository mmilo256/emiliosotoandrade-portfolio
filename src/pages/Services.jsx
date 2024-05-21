import Card from "../components/Card";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { FaShoppingBag } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";
import { IoApps } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-slate-900 to-gray-950"
    >
      <div className="container mx-auto px-2 md:px-0">
        <Heading>Servicios</Heading>
        <p className="text-center pb-14 text-slate-400 font-light text-xl">
          ¡Contáctate conmigo y hagamos tu sitio web a la medida!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
          <Card
            icon={<RiPagesFill />}
            description="Atrae y convierte visitantes con una Landing Page impactante y optimizada para campañas de marketing y lanzamientos de productos."
            title="Landing Page"
          />
          <Card
            icon={<FaShoppingBag />}
            description="Vende tus productos en línea con una tienda ecommerce funcional y segura, ofreciendo una experiencia de compra fluida y atractiva."
            title="Tiendas virtuales"
          />
          <Card
            icon={<IoApps />}
            description="Transforma tus ideas en aplicaciones web interactivas y funcionales, ofreciendo una experiencia de usuario excepcional."
            title="Aplicaciones Web"
          />
          <Card
            icon={<FaRegStar />}
            description="¿No encuentras lo que buscas? Ofrezco soluciones web a medida para cualquier necesidad específica. Cuéntame tu proyecto y lo crearemos juntos."
            title="Sitios Personalizados"
          />
        </div>
        <div className="mx-auto pt-10 max-w-72">
          <Button href="#contact" size="large" variant="secondary">
            ¡Quiero un sitio web!
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Services;
