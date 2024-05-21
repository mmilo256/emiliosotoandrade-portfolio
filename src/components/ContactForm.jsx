import Input from "./Input";
import Button from "./Button";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <>
      <motion.form
        onSubmit={handleFormSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col mt-10 gap-8 p-8 rounded-md bg-gradient-to-br from-slate-900 to-cyan-950 mx-auto max-w-[40rem]"
      >
        <Input
          label="Nombre completo"
          placeholder="Rick Sánchez"
          id="name"
          type="text"
        />
        <Input
          label="Correo electrónico"
          placeholder="correo@ejemplo.com"
          id="email"
          type="email"
        />
        <Input
          label="Mensaje"
          placeholder="¡Trabajemos juntos!"
          id="message"
          type="textarea"
        />
        <div className="w-full md:w-36 ml-auto">
          <Button
            type="submit"
            icon={<IoIosSend />}
            size="normal"
            variant="primary"
          >
            Enviar
          </Button>
        </div>
      </motion.form>
    </>
  );
}

export default ContactForm;
