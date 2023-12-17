"use client";
import React, { ChangeEvent, ElementRef, useRef, useState } from "react";
import POST from "../api/email/route";
import { useAction } from "@/lib/use-action";
import { sendEmail } from "@/actions/send-email";
import toast from "react-hot-toast";

export const Contact = () => {
  const formInitialState = {
    nome: "",
    email: "",
    celular: "",
  };
  const [formData, setFormData] = useState(formInitialState);

  const [formValid, setFormValid] = useState(false);
  const formRef = useRef<ElementRef<"form">>(null);
  const { execute, fieldErrors } = useAction(sendEmail, {
    onSuccess: (formData) => {
      setFormData(formInitialState);
      setFormValid(false);
      console.log(formData);
      toast.success("Email sent successfully")
    },
    onError: (error) => {
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    execute(formData);
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
    <div className=" w-full flex md:flex-row  flex-col justify-between md:items-start items-center">
      <div className=" lg:max-w-[463px] md:w-2/5 w-full flex flex-col justify-start md:items-start items-center gap-y-1 md:text-left text-center">
        <h2 className=" font-bold text-4xl">
          Cadastre-se para receber mais informações.
        </h2>
        <h3 className="w-4/5 font-bold text-lg">
          Fique ligado no que tem de melhor no Mercado Financeiro.
        </h3>
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center md:w-1/2 h-[384px] gap-y-6 lg:p-16 md:p-4 p-2 rounded-3xl border border-[#222729]"
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
