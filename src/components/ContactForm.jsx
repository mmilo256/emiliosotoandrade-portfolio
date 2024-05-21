import Input from "./Input";
import Button from "./Button";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    toast.success("¡Mensaje enviado exitosamente!");
    reset();
  });

  return (
    <>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onSubmit={onSubmit}
        className="flex flex-col mt-10 p-8 rounded-md bg-gradient-to-br from-slate-900 to-cyan-950 mx-auto max-w-[40rem]"
      >
        <Input
          label="Nombre completo"
          placeholder="Rick Sánchez"
          id="name"
          type="text"
          register={register("name", {
            required: {
              value: true,
              message: "El nombre es requerido",
            },
          })}
        />
        {errors.name && (
          <span className=" pb-2 text-sm text-red-400">
            {errors.name.message}
          </span>
        )}
        <Input
          label="Correo electrónico"
          placeholder="correo@ejemplo.com"
          id="email"
          type="email"
          register={register("email", {
            required: {
              value: true,
              message: "El correo es requerido",
            },
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "El correo no es válido",
            },
          })}
        />
        {errors.email && (
          <span className="pb-2 text-sm text-red-400">
            {errors.email.message}
          </span>
        )}
        <Input
          label="Mensaje"
          placeholder="¡Trabajemos juntos!"
          id="message"
          type="textarea"
          register={register("message", {
            required: {
              value: true,
              message: "El mensaje es requerido",
            },
          })}
        />
        {errors.message && (
          <span className="pb-2 text-sm text-red-400">
            {errors.message.message}
          </span>
        )}
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
      <ToastContainer />
    </>
  );
}

export default ContactForm;
