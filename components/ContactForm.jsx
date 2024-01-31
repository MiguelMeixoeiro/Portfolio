import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <Form>
      {/* Campos del formulario (nombre, correo, mensaje, etc.) */}
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default ContactForm;
