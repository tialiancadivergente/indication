"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !document.getElementById("buzzlead-root")) {
      return;
    }

    document.getElementById("buzzlead-widget-script")?.remove();

    const windowWithCampaign = window as Window & { campaignId?: string };
    windowWithCampaign.campaignId = "ZX0P";

    const script = document.createElement("script");
    script.id = "buzzlead-widget-script";
    script.src = "https://static.buzzlead.com.br/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, [isMounted]);

  const handleClick = () => {    
    setTimeout(() => {
      const element = document.getElementById("hero")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      } else {
        console.error("Elemento com id 'cadastro' não encontrado")
      }
    }, 100)
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-custom-background text-custom-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-96"
        style={{
          background:
            "radial-gradient(70.71% 141.42% at 50% 0%, rgba(192, 150, 75, 0.08) 0%, rgba(192, 150, 75, 0) 60%)",
        }}
      />

      <div
        className="w-full h-1"
        style={{
          background: "linear-gradient(90deg, rgba(16, 68, 72, 0) 0%, #104448 25%, #C0964B 50%, #104448 75%, rgba(16, 68, 72, 0) 100%)",
        }}
      />

      <section className="bg-custom-background px-6 pb-20 pt-20 sm:px-8 sm:pb-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center gap-0 lg:gap-10">
          <div className="text-lg text-white mb-6 lg:mb-0">
            <Image src="/images/icon-ad.png" alt="Aliança Divergente" width={40} height={68} />
          </div>
          <h1 className="font-spectral text-4xl font-bold uppercase italic tracking-tight text-custom-foreground lg:text-[80px]">
            Você pode inspirar
          </h1>
          <span className="font-spectral text-4xl font-bold uppercase tracking-tight text-custom-primary-gold lg:text-[80px]">novos aliados</span>
          <p id="hero" className="mt-5 max-w-xl font-spectral text-base lg:text-xl italic text-custom-muted letter">
            Indique amigos para a Aliança e transforme sua história em recompensas exclusivas.
          </p>
          {isMounted && (
            <div className="mt-8 flex w-full justify-center">
              <div id="buzzlead-root" className="min-h-screen w-full max-w-md" />
            </div>
          )}
        </div>

        <div
          className="w-full h-[1px] my-20"
          style={{
            background:
              "linear-gradient(90deg, #5ECFA000 0%, #5ECFA040 25%, #5ECFA000 100%)",
          }}
        />

        <div className="mx-auto max-w-4xl">
          <h2 className="font-spectral text-[31px] lg:text-[56px] leading-none text-white font-extrabold tracking-tighter">
            É <span className="text-custom-primary-gold">simples e rápido</span> fazer sua <br className="hidden lg:block" /> indicação.
          </h2>
          <p className="my-6 font-spectral text-base text-white">Veja como funciona:</p>

          <div className="space-y-5 font-raleway text-sm leading-6 text-custom-muted">
            <div className="flex gap-3">
              <p className="font-special-elite text-base text-[#C0964B]">
                1
              </p>
              <p className="font-spectral text-base text-white">
                Faça seu cadastro e gere seu link
              </p>
            </div>

            <div className="flex gap-3">
              <p className="font-special-elite text-base text-[#C0964B]">
                2
              </p>
              <p className="font-spectral text-base text-white">
                Preencha os dados do seu indicado ou envie seu link pelo WhatsApp
              </p>
            </div>
          </div>
        </div>

        <div
          className="w-full h-[1px] my-20"
          style={{
            background:
              "linear-gradient(90deg, #5ECFA000 0%, #5ECFA040 25%, #5ECFA000 100%)",
          }}
        />

        <div className="mx-auto max-w-4xl flex flex-col gap-6">
          <p className="font-spectral text-[22px] lg:text-[32px] text-white font-extrabold"><span className="text-custom-primary-gold">O segredo?</span> Convide com verdade.</p>
          <p className="font-spectral text-base text-white">Conte sua história, mostre coerência e resgate uma pessoa por vez. Seja o seu
            cônjuge, amigo ou um colega de trabalho que está pronto para fazer parte da Aliança.</p>
          <p className="font-spectral text-base text-white">Você está no caminho da evolução, e agora pode abrir a possibilidade de alguém começar a
            ter resultados — e ainda ser reconhecido por isso.</p>
        </div>

      </section>

      <section className="bg-custom-accent px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="font-special-elite text-xs uppercase tracking-widest text-custom-primary-gold">
            O que você pode conquistar
          </p>
          <h2 className="mt-3 font-spectral text-[31px] lg:text-[56px] font-extrabold leading-none text-custom-foreground">
            Quanto mais você indica, {" "}
            <span className="text-custom-primary-gold inline lg:block">
               mais você ganha.
            </span>
          </h2>
          <p className="mt-8 font-spectral text-base text-white">
            As recompensas crescem conforme você avança — por indicações validadas e
            convertidas. Tudo dentro do prazo de 45 dias a partir da sua adesão.
          </p>

          <div className="mt-10 space-y-6">
            <div className="border border-[#5ECFA02E] rounded-[4px] p-5 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-5 h-0.5 bg-custom-primary-gold" />
                <p className="font-special-elite text-xs uppercase tracking-widest text-custom-primary-gold">POR INDICAÇÕES</p>
              </div>
              <h3 className="font-spectral text-[28px] lg:text-3xl font-extrabold text-custom-foreground flex items-center gap-2 mt-5">
                Por indicações
                <ArrowRight size={24} className="font-extrabold" />
              </h3>

              <div className="mt-6 space-y-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                  <div className="">
                    <p className="font-spectral text-xs tracking-widest font-semibold text-white">
                      <span className="text-custom-primary-gold uppercase">5 indicações válidas</span> (fichas preenchidas e contato do comercial realizado)
                    </p>
                    <p className="mt-2 font-raleway text-sm leading-6 text-custom-muted">
                      Acesso ao Encontro "Por que você não avança mesmo fazendo de tudo" com
                      Jordão — durante 3 meses no Marca Passos
                    </p>
                  </div>
                  <div className="min-w-[200px] w-[200px] h-[130px] rounded-sm">
                    <Image src="/images/1.png" alt="Aliança Divergente" width={200} height={130} />
                  </div>
                </div>

                <div className="h-[1px] w-full bg-[#1f5154]" />

                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                  <div className="">
                    <p className="font-spectral text-xs tracking-widest font-semibold text-white">
                      <span className="text-custom-primary-gold uppercase">10 indicações válidas</span> (fichas preenchidas e contato do comercial realizado)
                    </p>
                    <p className="mt-2 font-raleway text-sm leading-6 text-custom-muted">
                      Acesso ao encontro "Como mudar seu destino em 2026" com Elton e Jordão
                    </p>
                  </div>
                  <div className="min-w-[200px] w-[200px] h-[130px] rounded-sm">
                    <Image src="/images/2.png" alt="Aliança Divergente" width={200} height={130} />
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#C0964B] rounded-[4px] bg-[#C0964B]/5 p-5 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-5 h-0.5 bg-custom-primary-gold" />
                <p className="font-special-elite text-xs uppercase tracking-widest text-custom-primary-gold">Por indicações convertidas</p>
              </div>
              <h3 className="font-spectral text-[28px] lg:text-3xl font-extrabold text-custom-foreground flex items-center gap-2 mt-5">
                Por indicações convertidas
                <ArrowRight size={24} className="font-extrabold" />
              </h3>

              <div className="mt-6 space-y-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="">
                    <p className="font-spectral text-xs tracking-widest font-semibold text-custom-primary-gold uppercase">
                      3 conversões
                    </p>
                    <p className="mt-2 font-raleway text-sm leading-6 text-custom-muted">
                      Boné Permissão Alta
                    </p>
                  </div>
                  <div className="min-w-[200px] w-[200px] h-[130px] rounded-sm">
                    <Image src="/images/5.png" alt="Aliança Divergente" width={200} height={130} />
                  </div>
                </div>

                <div className="h-[1px] w-full bg-[#1f5154]" />

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="">
                    <p className="font-spectral text-xs tracking-widest font-semibold text-custom-primary-gold uppercase">
                      4 conversões
                    </p>
                    <p className="mt-2 font-raleway text-sm leading-6 text-custom-muted">
                      Pense Comigo com mentor — você escolhe entre Cida, Jordão e Ramon
                    </p>
                  </div>
                  <div className="min-w-[200px] w-[200px] h-[130px] rounded-sm">
                    <Image src="/images/5.png" alt="Aliança Divergente" width={200} height={130} />
                  </div>
                </div>

                <div className="h-[1px] w-full bg-[#1f5154]" />

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="">
                    <p className="font-spectral text-xs tracking-widest font-semibold text-custom-primary-gold uppercase">
                      8 conversões
                    </p>
                    <p className="mt-2 font-raleway text-sm leading-6 text-custom-muted">
                      Almoço com mentor + Pense Comigo — você escolhe entre Cida, Jordão e
                      Ramon
                    </p>
                  </div>
                  <div className="min-w-[200px] w-[200px] h-[130px] rounded-sm">
                    <Image src="/images/5.png" alt="Aliança Divergente" width={200} height={130} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={handleClick}
              className="bg-custom-primary-gold min-h-[60px] w-[228px] px-8 py-3 font-special-elite text-base font-bold uppercase tracking-widest text-custom-primary-foreground"
            >
              Quero Ganhar
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#07242C] px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="font-special-elite text-xs uppercase tracking-widest text-custom-primary-gold">
            Como funciona
          </p>
          <h2 className="mt-6 font-spectral text-[31px] lg:text-[56px] font-extrabold leading-8 text-custom-foreground">
            Direto ao <span className="text-custom-primary-gold">ponto.</span>
          </h2>

          <div className="mt-16 space-y-10">
            <div className="flex gap-4">
              <span className="flex size-[38px] shrink-0 items-center font-extrabold justify-center rounded-full border border-[#006D71] font-spectral text-[18px] text-custom-primary-gold">
                1
              </span>
              <div>
                <h3 className="font-spectral text-[18px] font-semibold text-custom-foreground">
                  Acesse seu link de indicação
                </h3>
                <p className="mt-1 font-spectral text-base leading-6 text-custom-foreground">
                  Cada Aliado tem um link exclusivo. É por ali que tudo começa.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex size-[38px] shrink-0 items-center font-extrabold justify-center rounded-full border border-[#006D71] font-spectral text-[18px] text-custom-primary-gold">
                2
              </span>
              <div>
                <h3 className="font-spectral text-[18px] font-semibold text-custom-foreground">
                  Convide quem você acredita
                </h3>
                <p className="mt-1 font-spectral text-base leading-6 text-custom-foreground">
                  Cônjuge, amigo próximo, colega de trabalho — alguém que você sabe que pode crescer com a Aliança.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex size-[38px] shrink-0 items-center font-extrabold justify-center rounded-full border border-[#006D71] font-spectral text-[18px] text-custom-primary-gold">
                3
              </span>
              <div>
                <h3 className="font-spectral text-[18px] font-semibold text-custom-foreground">
                  Suas indicações são registradas
                </h3>
                <p className="mt-1 font-spectral text-base leading-6 text-custom-foreground">
                  Quando a pessoa indicada preenche os dados pelo seu link e atende o contato do comercial, a indicação é registrada
                  como válida. As indicações convertidas também são contabilizadas após o período da garantia.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex size-[38px] shrink-0 items-center font-extrabold justify-center rounded-full border border-[#006D71] font-spectral text-[18px] text-custom-primary-gold">
                4
              </span>
              <div>
                <h3 className="font-spectral text-[18px] font-semibold text-custom-foreground">
                  Conquiste dentro do prazo de 1 mês
                </h3>
                <p className="mt-1 font-spectral text-base leading-6 text-custom-foreground">
                  Indicações e conversões precisam acontecer no mesmo período do mês vigente para contar para os prêmios.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex size-[38px] shrink-0 items-center font-extrabold justify-center rounded-full border border-[#006D71] font-spectral text-[18px] text-custom-primary-gold">
                5
              </span>
              <div>
                <h3 className="font-spectral text-[18px] font-semibold text-custom-foreground">
                  Receba sua recompensa
                </h3>
                <p className="mt-1 font-spectral text-base leading-6 text-custom-foreground">
                  Chegando na meta — de indicações ou de vendas —, você recebe o prêmio correspondente após período de validação.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 lg:mt-40 text-center">
            <h2 className="font-spectral text-[35px] lg:text-[64px] font-extrabold leading-none text-custom-foreground">
              Pronto para
              <span className="block text-custom-primary-gold">
                indicar e ganhar?
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-spectral text-base leading-6 text-custom-muted">
              Um link. Um convite. Uma decisão que pode mudar a trajetória
              de alguém que você conhece.
            </p>
            <button
              type="button"
              onClick={handleClick}
              className="mt-10 bg-custom-primary-gold px-8 py-3 min-h-[60px] min-w-[330px] font-special-elite text-base uppercase tracking-widest text-[#07242C]"
            >
              Quero indicar e ganhar
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#2c3b32] bg-custom-background px-6 pt-10 text-center sm:px-8 h-[220px] flex flex-col justify-between">
        <div>
          <p className="font-spectral text-[14px] font-bold uppercase tracking-widest text-white">
            EDITORA ALIANÇA DIVERGENTE LTDA
          </p>
          <p className="mx-auto mt-3 max-w-xl font-spectral text-xs leading-5 text-white/50">
            CNPJ nº 48.424.807/0001-88 <br />
            Rua Salviano José da Silva, 400 – Eldorado – São José dos Campos/SP – CEP 12238-573
          </p>
        </div>

        <div
          className="w-full h-1"
          style={{
            background: "linear-gradient(90deg, rgba(16, 68, 72, 0) 0%, #104448 25%, #C0964B 50%, #104448 75%, rgba(16, 68, 72, 0) 100%)",
          }}
        />
      </footer>
    </main>
  );
} 