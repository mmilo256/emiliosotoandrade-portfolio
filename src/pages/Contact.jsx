import Heading from "../components/Heading";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b pb-16 from-gray-900 to-gray-950"
    >
      <div className="container mx-auto px-2 md:px-0">
        <Heading>Contacto</Heading>
        <p className="text-center text-slate-400 font-light text-xl">
          ¿Quieres cotizar un sitio web o trabajar conmigo? <br /> Puedes
          escribirme a mi correo{" "}
          <span className="text-primaryLight">
            emiliosotoandrade256@gmail.com
          </span>{" "}
          <br />o dejarme un mensaje en mis redes sociales{" "}
        </p>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
