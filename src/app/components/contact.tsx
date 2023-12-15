"use client";
import React, { ChangeEvent, FormEventHandler, useState } from "react";

export const Contact = () => {
  const formInitialState = {
    nome: "",
    email: "",
    celular: "",
  };
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
  });

  const [formValid, setFormValid] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/your-email-sending-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
      } else {
        console.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
    setFormData(formInitialState);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFormValid(
      formData.nome.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.celular.trim() !== ""
    );
  };

  return (
    <div className="h-[50svh] w-full flex justify-between items-start">
      <div className=" max-w-[463px] flex flex-col justify-start items-start gap-y-1">
        <h2 className=" font-bold text-4xl">
          Cadastre-se para receber mais informações.
        </h2>
        <h3 className="w-4/5 font-bold text-lg">
          Fique ligado no que tem de melhor no Mercado Financeiro.
        </h3>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-1/2 h-[384px] gap-y-6 p-16 rounded-3xl border border-[#222729]"
      >
        <input
          type="text"
          id="nome"
          placeholder="Nome"
          value={formData.nome}
          required
          onChange={handleChange}
          className=" bg-[#222729] border border-[#222729] p-4 w-full rounded-md"
        />
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          value={formData.email}
          required
          onChange={handleChange}
          className=" bg-[#222729] border border-[#222729] p-4 w-full rounded-md"
        />
        <input
          type="tel"
          id="celular"
          placeholder="Celular"
          required
          value={formData.celular}
          onChange={handleChange}
          className=" bg-[#222729] border border-[#222729] p-4 w-full rounded-md"
        />
        <button
          className=" bg-[#19C819] text-black font-semibold text-lg px-8 py-3 w-full rounded-md disabled:cursor-not-allowed"
          type="submit"
          disabled={!formValid}
        >
          QUERO ME INSCREVER
        </button>
      </form>
    </div>
  );
};
