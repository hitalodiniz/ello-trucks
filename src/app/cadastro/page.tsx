"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Loader2, Truck, User, Phone, Mail, Lock } from "lucide-react";
// Importamos a função de disparar o alerta
import { toast } from "sonner";
import { maskPhone } from "@/utils/masks";
import { isValidEmail } from "@/utils/validators";

export default function Cadastro() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Estados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    senha: "",
  });

  // Função que SIMULA o cadastro (Modo Offline)
  async function handleCadastro(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Simula uma espera de 2 segundos (como se fosse o banco de dados)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 1. Validação de WhatsApp (comprimento)
    if (formData.whatsapp.length < 15) {
      toast.error("Telefone inválido", {
        description: "Digite o número completo com DDD.",
      });
      setLoading(false);
      return;
    }

    // 2. Validação de Email (formato)
    if (!isValidEmail(formData.email)) {
      toast.error("Email inválido", {
        description:
          "Por favor, verifique se digitou corretamente (ex: nome@email.com).",
      });
      setLoading(false);
      return;
    }

    // 3. Validação de Senha (tamanho)
    if (formData.senha.length < 6) {
      toast.error("Senha muito fraca", {
        description: "A senha precisa ter pelo menos 6 caracteres.",
      });
      setLoading(false);
      return;
    }

    // 2. DISPARAMOS A NOTIFICAÇÃO PROFISSIONAL
    toast.success("Cadastro realizado com sucesso!", {
      description: `Bem-vindo(a), ${formData.nome}. Vamos começar!`,
      duration: 4000, // Fica na tela por 4 segundos
    });

    // Espera um pouquinho só para o usuário ver a notificação antes de sair
    setTimeout(() => {
      router.push("/");
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-brand-gray flex flex-col items-center justify-center p-4">
      {/* Cabeçalho */}
      <div className="text-center mb-8 max-w-lg">
        <Link
          href="/"
          className="inline-block mb-6 hover:scale-105 transition transform"
        >
          <Image
            src="/logo-icone.png"
            alt="Ello Trucks"
            width={200}
            height={90}
            className="w-auto h-20 mx-auto"
          />
        </Link>
        <h1 className="text-3xl md:text-5x1 font-extrabold text-white tracking-tight leading-tight">
          Junte-se à <span className="text-brand-yellow">Ello Trucks</span>
        </h1>
        <p className="text-gray-200 mt-4 text-base md:text-lg">
          Crie sua conta para vender caminhões e prestar serviços para todo o
          Brasil.
        </p>
      </div>

      {/* Card do Formulário */}
      <div className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-3xl w-full max-w-xl shadow-2xl backdrop-blur-sm">
        <form onSubmit={handleCadastro} className="space-y-5">
          {/* Nome */}
          <div className="group">
            <label className="text-sm md:text-base font-bold text-brand-yellow mb-2 ml-1 flex items-center gap-2">
              <User size={18} /> Nome da Revenda ou Vendedor
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Ello Caminhões"
              className="w-full bg-gray-900/60 border border-gray-700 text-white text-base md:text-lg rounded-xl p-4 outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition placeholder:text-gray-600"
              value={formData.nome}
              onChange={(e) =>
                setFormData({ ...formData, nome: e.target.value })
              }
            />
          </div>

          {/* WhatsApp */}
          <div className="group">
            <label className="text-sm md:text-base font-bold text-brand-yellow mb-2 ml-1 flex items-center gap-2">
              <Phone size={16} /> WhatsApp
            </label>
            <input
              type="tel"
              required
              placeholder="(31) 99999-9999"
              className="w-full bg-gray-900/60 border border-gray-700 text-white text-base md:text-lg rounded-xl p-4 outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition placeholder:text-gray-600"
              value={formData.whatsapp}
              // 2. Uso direto e limpo da função importada
              onChange={(e) =>
                setFormData({ ...formData, whatsapp: maskPhone(e) })
              }
              maxLength={15}
            />
          </div>

          {/* Email */}
          <div className="group">
            <label className="text-sm md:text-base font-bold text-brand-yellow mb-2 ml-1 flex items-center gap-2">
              <Mail size={16} /> Email
            </label>
            <input
              type="email"
              required
              placeholder="seu@email.com"
              className="w-full bg-gray-900/60 border border-gray-700 text-white text-base md:text-lg rounded-xl p-4 outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition placeholder:text-gray-600"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          {/* Senha */}
          <div className="group">
            <label className="text-sm md:text-base font-bold text-brand-yellow mb-2 ml-1 flex items-center gap-2">
              <Lock size={16} /> Senha
            </label>
            <input
              type="password"
              required
              placeholder="Mínimo 6 caracteres"
              className="w-full bg-gray-900/60 border border-gray-700 text-white text-base md:text-lg rounded-xl p-4 outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition placeholder:text-gray-600"
              value={formData.senha}
              onChange={(e) =>
                setFormData({ ...formData, senha: e.target.value })
              }
            />
          </div>

          {/* Botão de Ação */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-yellow text-brand-gray font-extrabold text-lg md:text-xl py-4 rounded-xl hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 transition flex items-center justify-center gap-3 mt-8 disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {loading ? (
              <Loader2 className="animate-spin w-6 h-6" />
            ) : (
              <>
                <Truck
                  size={24}
                  className="group-hover:translate-x-1 transition-transform"
                />
                CRIAR CONTA GRÁTIS
              </>
            )}
          </button>
        </form>
        <div className="mt-8 text-center border-t border-white/10 pt-6">
          <p className="text-gray-200 text-sm text-sm md:text-base">
            Já tem uma conta?{" "}
            <Link
              href="/login"
              className="text-brand-yellow font-bold hover:underline ml-1"
            >
              Fazer Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
