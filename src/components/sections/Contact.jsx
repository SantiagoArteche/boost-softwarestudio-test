import { useFormik } from "formik";
import Swal from "sweetalert2";

export const Contact = () => {
  const { getFieldProps, handleSubmit, resetForm } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
      address: "",
    },
    validateOnChange: false,
    onSubmit: ({ name, email }) => {
      Swal.fire({
        title: "Formulario enviado",
        background: "black",
        color: "white",
        icon: "success",
        confirmButtonColor: "#a47904",
        confirmButtonText: "Ok",
        iconColor: "#a47904",
        text: `Felicitaciones ${name}, se te responderá a tu email [${email}] con la mayor rápidez posible!`,
      });

      email && resetForm();
    },
  });

  return (
    <div className="bg-yellow-400 flex flex-col justify-center items-center gap-5 pt-10 min-h-[85vh]">
      <h2 className="text-center text-4xl md:text-5xl font-bold">
        CONTÁCTENOS
      </h2>
      <p className="text-center max-w-[550px] font-semibold">
        Envianos un mensaje y te responderemos tan rápido como sea posible.
        Esperamos escuchar acerca de ti.
      </p>
      <form
        className="border-4 p-10 gap-3 flex flex-col border-black mb-10 mt-5 rounded"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label className="text-lg md:text-xl font-semibold">Nombre</label>
          <input
            type="text"
            {...getFieldProps("name")}
            className="w-[250px] sm:w-[500px] md:w-[600px] p-2 bg-yellow-400 text-black placeholder:text-gray-700 border-2 border-black rounded"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg md:text-xl font-semibold">Email</label>
          <input
            type="text"
            {...getFieldProps("email")}
            className="w-[250px] sm:w-[500px] md:w-[600px] p-2 bg-yellow-400 text-black border-2 border-black placeholder:text-gray-700 rounded"
            placeholder="Email"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg md:text-xl font-semibold">Teléfono</label>
          <input
            type="number"
            {...getFieldProps("phone")}
            min={0}
            className="w-[250px] sm:w-[500px] md:w-[600px] p-2 bg-yellow-400 text-black border-2 border-black placeholder:text-gray-700 rounded"
            placeholder="Teléfono"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg md:text-xl font-semibold">Dirección</label>
          <input
            type="text"
            {...getFieldProps("address")}
            className="w-[250px] sm:w-[500px] md:w-[600px] p-2 bg-yellow-400 text-black border-2 border-black placeholder:text-gray-700 rounded"
            placeholder="Dirección"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg md:text-xl font-semibold">Mensaje</label>
          <textarea
            {...getFieldProps("message")}
            className="w-[250px] sm:w-[500px] md:w-[600px] p-2 bg-yellow-400 text-black border-2 border-black resize-none placeholder:text-gray-700 appearance-none rounded"
            placeholder="Tu mensaje..."
            rows={5}
            cols={30}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="border-2 text-lg md:text-xl hover:bg-black hover:text-yellow-400 cursor-pointer border-black w-fit p-2 mt-5 text-center font-bold rounded"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
