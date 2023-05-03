import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function ContactForm() {
     const [formularioEnviado, setFormularioEnviado] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const initialValues = {
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    asunto: "",
    mensaje: "",
  };

  const validate = (values) => {
    let errors = {};

    // Validación Nombre

    if (!values.nombre) {
      errors.nombre = <div className="my-2 text-apperror">Por favor ingrese un nombre. </div>;
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
      errors.nombre = (
        <div className="mb-5 text-apperror">
          El nombre solo puede contener letras y espacios.
        </div>
      );
    }

    // Validación Email

    if (!values.email) {
      errors.email = <div className="my-2 text-apperror">Por favor ingrese un Email.</div>;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = (
        <div className="mb-5 text-apperror">
          El email solo puede contener letras, numeros, puntos, guiones y guion
          bajo.
        </div>
      );
    }

    // Validación Telefono

    if (!values.telefono) {
      errors.telefono = (
        <div className="my-2 text-apperror">Por favor ingrese un telefono.</div>
      );
    } else if (!/^[0-6]]+$/.test(values.telefono)) {
    }

    // Validación Direccion

    if (!values.direccion) {
      errors.direccion = (
        <div className="my-2 text-apperror">Por favor ingrese la dirección.</div>
      );
    } else if (!/^[0-6]]+$/.test(values.direccion)) {
    }

    // Validación Asunto

    if (!values.asunto) {
      errors.asunto = (
        <div className="my-2 text-apperror">Por favor ingrese el asunto.</div>
      );
    } else if (!/^[0-6]]+$/.test(values.asunto)) {
    }

    // Validación Mensaje

    if (!values.mensaje) {
      errors.mensaje = (
        <div className="my-2 text-apperror">Por favor ingrese un mensaje.</div>
      );
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.mensaje)) {
    }

    return errors;
  };

  const onSubmit = (values, submitProps) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "consulta", ...values }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        } else if (response.ok) {
          setFormularioEnviado(true);

          submitProps.resetForm();
        } else {
          alert("Something went wrong!");
        }
        setTimeout(() => formularioEnviado(false), 2000);
        return response;
      })
      .catch((error) => alert(error));
  }

  return (
    <>
    <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        <div>
            <Form className="w-full h-full mt-16 flex flex-col sm:justify-center">
                <input type="hidden" name="form-name" value="consulta" />
                <div className="form-body">
                <div>
                    <Field className="w-[80%] border-2 border-apporange rounded-md mb-2 p-1" type="name" id="nombre" name='nombre' placeholder="Nombre"/>
                </div>
                    <ErrorMessage name="nombre"/>
                <div>
                    <Field className="w-[80%] border-2 border-apporange rounded-md mb-2 p-1" type="email" id="email" name='email' placeholder="Email"/>
                </div>
                    <ErrorMessage name="email" />
                <div>
                    <Field className="w-[80%] border-2 border-apporange rounded-md mb-2 p-1" type="phone" id="telefono" name='telefono' placeholder="Teléfono"/>
                </div>
                    <ErrorMessage name="telefono" />
                <div>
                    <Field className="w-[80%] border-2 border-apporange rounded-md mb-2 p-1" type="text" id="direccion" name='direccion' placeholder="Dirección"/>
                </div>
                    <ErrorMessage name="direccion" />
                <div>
                    <Field className="w-[80%] border-2 border-apporange rounded-md mb-2 p-1" type="text" id="asunto" name='asunto' placeholder="Asunto"/>
                </div>
                    <ErrorMessage name="asunto" />
                <div>
                    <Field className="w-[80%] h-40 border-2 border-apporange rounded-md mb-2 p-1" name="mensaje" id="mensaje" placeholder="Mensaje"></Field>
                    <ErrorMessage name="mensaje" />
                </div>
                <div data-netlify-recaptcha="true"></div>
                <button type='submit' className="w-[80%] bg-apporange px-16 py-3 rounded-md font-semibold mb-5 hover:bg-appwhite border-2 border-solid border-apporange hover:border-apporange">Enviar</button>
                {formularioEnviado && (
                <p className="exito text-green-600">Formulario enviado con exito!</p>
              )}
              </div>
            </Form>
        </div>
    </Formik>    
    </>
  );
}