import { Box,Divider, Stack, Typography } from "@mui/material";
import { Section } from "./../../../components/Section/index";
import DividerH1 from "../../../components/DividerH1";
import ServiceItem from "../../../components/ServiceItem";
import BtnEspecialista from "../../../components/BtnEspecialista";
import Background from "../../../components/Background";

export default function Services() {
  const services = [
    {
      title: "Marketing Digital",
      subtitle: `Google Ads\n
       Facebook e Instagram Ads`,
      description: `A mídia certa no lugar certo, gerando mais fluxo para sua loja.
        Diagnosticamos, avaliamos e implementamos conteúdo e mídia otimizados para potencializar os resultados do seu negócio.`,
    },
    {
      title: "Social Media",
      subtitle: `Estratégia de mídias sociais.
      Criação e gerenciamento de conteúdo.
      Análises e relatórios.`,
      description: `Ajudamos a transformar seguidores em fãs e a gerar vendas e oportunidades recorrentes para nossos clientes, construindo, assim, laços reais e uma legião de defensores das marcas.`,
    },
    {
      title: "Criação",
      subtitle: `Business\n
      Branding`,
      description: `Tudo começa com uma boa marca. Por isso temos um time especializado em ajudar organizações a se posicionarem dentro dos seus propósitos. Buscamos sempre criar um diferencial da marca e trazê-lo à tona, aliado aos objetivos do negócio e às mais novas tendências.`,
    },
    {
      title: "Web/Mobile",
      subtitle: `Criação de sites institucionais |\n
        Landing pages |\n
        Hotsites |\n
        Lojas virtuais |\n
        Criação APP Mobile e
        Criação de Sistemas`,
      description: `Elaboramos projetos otimizados e responsivos para garantir que sua marca venda mais. Pesquisamos seus concorrentes, geramos conteúdos adequados à realidade do seu setor e definimos as melhores estratégias de layout para você conquistar ainda mais clientes! Tudo isso tendo como base metodologias como UI/UX Design.`,
    },
    {
      title: "DPO",
      subtitle: `Adequação a LGPD |\t  Proteção contra multas e penalidades da LGPD |\n Auditoria de Conformidade|\n Políticas e Procedimentos | Gestão de Riscos | Treinamento e Capacitação | Monitoramento e Relatórios`,
      description: `Na era digital, a proteção de dados é uma prioridade para empresas que valorizam a confiança e a privacidade de seus clientes. Nosso serviço de DPO oferece uma abordagem holística e especializada para garantir que sua organização esteja em plena conformidade com as regulamentações de proteção de dados, como a GDPR (Regulamento Geral de Proteção de Dados) e a LGPD (Lei Geral de Proteção de Dados).`,
    },
  ];

  return (
    <Section name="Serviços" id="services">
      <Stack flexDirection={"column"}>
      <Background />
        <DividerH1 />
        <Typography
          sx={{
            fontSize: { md: 39, xs: 25 },
            fontFamily: "Filson Pro",
            fontWeight: 600,
            color: "#325CD9",
            paddingLeft: { md: "1%", xs: "1%" },
          }}
        >
          Serviços
        </Typography>
        <Divider color={"#00000030"} data-animate="grow" />

        {services.map((service, index) => (
          <div key={index}>
            <ServiceItem
              key={service.title}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
            />
            <Divider
              key={index.toString()}
              sx={{ margin: { md: "2rem 0", xs: "1rem 0" } }}
              color={"#00000030"}
              data-animate="grow"
            />
          </div>
        ))}
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Box width={"calc(100vw/3)"}>
            <Typography
              sx={{
                fontFamily: "Filson Pro",
                fontSize: { md: "49px", xs: "12.25px" },
                color: "#325CD9",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Vem “pra” Ramosec!!!
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            width={"calc(100vw/3)"}
          >
            <svg
              width="143"
              height="24"
              viewBox="0 0 143 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M128.425 22.4L127 21L135.175 13H123V11H135.175L127 2.8248L128.425 1.4248L139 12L128.425 22.4Z"
                fill="#05C7F2"
              />
              <line
                x1="8.74228e-08"
                y1="12"
                x2="123"
                y2="12"
                stroke="url(#paint0_linear_50_88)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_50_88"
                  x1="-18.45"
                  y1="13.5"
                  x2="123"
                  y2="13.5001"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#325CD9" />
                  <stop offset="0.890625" stopColor="#08C1F1" />
                  <stop offset="1" stopColor="#05C7F2" />
                </linearGradient>
              </defs>
            </svg>
          </Box>
          <Box width={"calc(100vw/3)"}>
            <BtnEspecialista />
          </Box>
        </Stack>
      </Stack>
    </Section>
  );
}
