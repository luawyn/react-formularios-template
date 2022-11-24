import React from "react";
import { useForm } from "../../hooks/useForm";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {
  const [formulario, onChange] = useForm({ nome: "", idade: "", email: "" });

  const handleClick = (event) => {
    event.preventDefault();

    // console.log(`nome: ${nome}, idade: ${idade}, e-mail: ${email} `);
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input
          name="nome"
          id="nome"
          value={formulario.nome}
          onChange={onChange}
        />

        <label htmlFor="idade">Idade:</label>
        <Input
          name="idade"
          id="idade"
          value={formulario.idade}
          onChange={onChange}
        />

        <label htmlFor="email">E-mail:</label>
        <Input
          name="email"
          id="email"
          value={formulario.email}
          onChange={onChange}
        />

        <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
