import Image from "next/image";
import { Search, MapPin, Facebook, Instagram, Phone, Mail } from "lucide-react";
// 1. Importamos os dados fictícios aqui
import { veiculosMock } from "@/data/mock-trucks";

export default function Home() {
  // 2. Trazemos os dados para uma variável local
  const veiculos = veiculosMock;
  return (
    <main className="min-h-screen flex flex-col">
      {/* --- HERO SECTION (A Identidade Visual) --- */}
      {/* 1. Mudamos de bg-brand-yellow para bg-brand-gray */}
      <section className="bg-brand-gray pt-6 pb-12 px-4 rounded-b-[3rem] shadow-2xl shadow-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <header className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2 text-white">
              <Image
                src="/logo-icone.png" // O Next.js busca automaticamente na pasta public
                alt="Ello Trucks Logo"
                width={240} // Largura inicial (ajuste se ficar muito grande/pequeno)
                height={120} // Altura proporcional
                priority // Diz ao site para carregar essa imagem primeiro (importante para logo)
                className="w-auto h-16 md:h-20" // Classes do Tailwind para ajustar a altura responsivamente
              />
              <span className="text-2xl md:text-4xl font-extrabold tracking-wide uppercase">
                Ello Trucks
              </span>
            </div>

            <button className="text-white font-bold border-2 border-white/20 px-6 py-2 rounded-full hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-gray transition">
              Entrar
            </button>
          </header>

          <div className="text-center text-white space-y-4">
            {/* <h4 className="text-2xl md:text-5xl font-extrabold leading-tight">
               Ello entre <br />
              <span className="text-brand-yellow">
                bons negócios e serviços para quem vive na estrada.
              </span>              
            </h4> 
            */}
            <p className="text-3xl md:text-2xl font-bold">
              <span className="text-brand-yellow">
                Bons negócios e serviços para quem vive na estrada
              </span>
            </p>

            <div className="bg-white p-1.5 rounded-full shadow-xl max-w-3xl mx-auto flex items-center mt-4">
              <div className="flex-1 flex items-center px-4 border-r border-gray-200">
                <Search className="text-gray-400 mr-2 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Ex: Scania R440 ou Auto Elétrica"
                  className="w-full outline-none text-brand-gray font-medium placeholder:text-gray-400"
                />
              </div>
              <div className="hidden md:flex items-center px-4">
                <MapPin className="text-gray-400 mr-2" />
                <span className="text-gray-600 font-medium">Betim, MG</span>
              </div>
              {/* 3. O Botão Principal vira Amarelo (Chamada para Ação) */}
              <button className="bg-brand-yellow text-brand-gray px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition">
                BUSCAR
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTEÚDO (Agora Dinâmico com Mock Data) --- */}
      <section className="max-w-6xl mx-auto py-16 px-4 w-full">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-brand-gray">
            Destaques em Betim
          </h2>
          <a href="#" className="text-brand-yellow font-bold hover:underline">
            Ver tudo
          </a>
        </div>

        {/* 3. Grid de Cards usando os dados reais do Mock */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {veiculos.map((truck) => (
            <div
              key={truck.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition group"
            >
              {/* Foto com Zoom e Etiqueta de Ano */}
              <div className="h-56 bg-gray-200 overflow-hidden relative">
                <img
                  src={truck.foto_capa}
                  alt={truck.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-2 right-2 bg-brand-yellow text-brand-gray text-xs font-bold px-2 py-1 rounded">
                  {truck.ano}
                </div>
              </div>

              {/* Informações do Caminhão */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-gray line-clamp-1">
                  {truck.titulo}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {truck.tracao} • {truck.km.toLocaleString("pt-BR")} km •{" "}
                  {truck.cidade}
                </p>

                <div className="flex justify-between items-center mt-2">
                  <div>
                    <span className="text-xs text-gray-400 block">
                      Valor à vista
                    </span>
                    <span className="text-2xl font-bold text-brand-yellow">
                      {Number(truck.preco).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </div>
                  <a
                    href={`https://wa.me/${truck.telefone}`}
                    target="_blank"
                    className="bg-brand-green text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-green-700 transition flex items-center gap-2"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* --- RODAPÉ (FOOTER) --- */}
      <footer className="bg-brand-gray text-white pt-16 pb-8 mt-auto border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          {/* Grid de 4 Colunas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Coluna 1: Marca e Sobre */}
            <div className="space-y-4">
              {/* Logo no Rodapé */}
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo-icone.png"
                  alt="Ello Trucks"
                  width={240}
                  height={100}
                  className="w-auto h-10 opacity-90"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                O maior portal de negócios da linha pesada em Minas Gerais.
                Conectando quem vende com quem precisa comprar ou consertar.
              </p>
              {/* Redes Sociais */}
              <div className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-brand-yellow hover:text-brand-gray transition"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-brand-yellow hover:text-brand-gray transition"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Coluna 2: Navegação Rápida */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white border-l-4 border-brand-yellow pl-3">
                Navegação
              </h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-brand-yellow transition">
                    Comprar Caminhão
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-yellow transition">
                    Vender meu Veículo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-yellow transition">
                    Guia de Serviços
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-yellow transition">
                    Simular Financiamento
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Categorias */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white border-l-4 border-brand-yellow pl-3">
                Categorias
              </h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-brand-yellow transition">
                    Cavalos Mecânicos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-yellow transition">
                    Carretas e Implementos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-yellow transition">
                    Caminhões Truck
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-yellow transition">
                    Utilitários
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 4: Contato */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white border-l-4 border-brand-yellow pl-3">
                Fale Conosco
              </h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="text-brand-yellow shrink-0" size={18} />
                  <span>
                    Betim, MG - Próximo à Rodovia Fernão Dias (BR-381)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-brand-yellow shrink-0" size={18} />
                  <span>(31) 99999-9999</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-brand-yellow shrink-0" size={18} />
                  <span>contato@ellotrucks.com.br</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Barra de Copyright */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2025 Ello Trucks. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-white">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
