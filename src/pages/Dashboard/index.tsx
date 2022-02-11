import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { Title, Form, Container, Error, Cards, Card } from "./styles";

interface Endereco {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

const Dashboard: React.FC = () => {
  const [newEndereco, setNewEndereco] = useState("");
  const [inputError, setInputError] = useState("");
  const [enderecosList, setEnderecos] = useState<Endereco[]>(() => {
    const storageRepository = localStorage.getItem("@Enderecos");

    if (storageRepository) {
      return JSON.parse(storageRepository);
    }

    return [];
  });

  const searchEndereco = async () => {
    if (!newEndereco) {
      setInputError("Digite um CEP para pesquisar");
      return;
    }

    try {
      const response = await api.get(`${newEndereco.replace(".", "")}/json/`);
      const endereco = response.data;

      const dadosEndereco = {
        cep: endereco.cep,
        logradouro: endereco.logradouro,
        bairro: endereco.bairro,
        localidade: endereco.localidade,
        uf: endereco.uf,
      };

      setEnderecos([dadosEndereco, ...enderecosList]);
    } catch (err) {
      setInputError("Endereço não encontrado.");
      setNewEndereco("");
    }
  };

  useEffect(() => {
    localStorage.setItem("@Enderecos", JSON.stringify(enderecosList));
  }, [enderecosList]);

  return (
    <Container>
      <Title>Pesquise endereços por CEP</Title>

      <Form>
        <input
          onChange={(e) => {
            setNewEndereco(e.target.value);
          }}
          type="text"
          placeholder="Digite o CEP"
        />
        <button onClick={searchEndereco}>Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Cards>
        {enderecosList.map((endereco, index) => (
          <Card key={index}>
            <p>Cep: {endereco.cep}</p>
            <p>Logradouro: {endereco.logradouro}</p>
            <p>Bairro: {endereco.bairro}</p>
            <p>Localidade: {endereco.localidade}</p>
            <p>UF: {endereco.uf}</p>
          </Card>
        ))}
      </Cards>
    </Container>
  );
};

export default Dashboard;
