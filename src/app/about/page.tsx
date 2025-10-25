"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark font-inter text-light overflow-hidden">
      {/* Fundo com efeitos espaciais */}
      <div className="fixed inset-0 bg-gradient-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,119,255,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,224,255,0.1),transparent)]" />
      </div>

      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-50 p-6"
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.a 
            href="/"
            className="text-2xl font-poppins font-bold bg-gradient-space bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Ávila.inc
          </motion.a>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-poppins font-bold mb-8 text-center"
          >
            <span className="bg-gradient-space bg-clip-text text-transparent">
              Como Funcionamos
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-light/80 text-center max-w-4xl mx-auto mb-16"
          >
            A Ávila Inc é uma holding de tecnologia que identifica, desenvolve e escala 
            empresas disruptivas para transformar indústrias através da inovação.
          </motion.p>
        </div>
      </section>

      {/* Nossa Metodologia */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-poppins font-bold text-center mb-16 text-secondary"
          >
            🎯 Nossa Metodologia
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Identificação",
                description: "Analisamos mercados emergentes e tecnologias disruptivas com potencial de transformação industrial.",
                details: [
                  "Pesquisa de mercado profunda",
                  "Análise de tendências tecnológicas",
                  "Identificação de gaps no mercado",
                  "Avaliação de potencial disruptivo"
                ]
              },
              {
                step: "02", 
                title: "Desenvolvimento",
                description: "Criamos ou adquirimos empresas com foco em inovação e crescimento sustentável.",
                details: [
                  "Due diligence técnica e comercial",
                  "Estruturação societária otimizada",
                  "Formação de equipes de alto desempenho", 
                  "Definição de roadmap estratégico"
                ]
              },
              {
                step: "03",
                title: "Escala",
                description: "Investimos recursos e expertise para acelerar o crescimento das empresas do portfólio.",
                details: [
                  "Aporte de capital estratégico",
                  "Mentoria executiva especializada",
                  "Expansão de rede de contatos",
                  "Otimização de processos operacionais"
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
              >
                <div className="text-6xl font-poppins font-bold text-primary mb-4">{item.step}</div>
                <h3 className="text-2xl font-poppins font-bold text-light mb-4">{item.title}</h3>
                <p className="text-light/70 mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-3 text-light/60">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelo de Negócio */}
      <section className="relative z-10 py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-poppins font-bold text-center mb-16 text-secondary"
          >
            💡 Modelo de Negócio
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-poppins font-bold text-light mb-8">
                Estrutura Diversificada
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: "🏢",
                    title: "Holding de Investimentos", 
                    desc: "Estrutura diversificada de participações em empresas de tecnologia de alto crescimento"
                  },
                  {
                    icon: "🚀",
                    title: "Incubadora Interna",
                    desc: "Desenvolvimento de projetos próprios com foco em inovação disruptiva e market fit"
                  },
                  {
                    icon: "🎯",
                    title: "Consultoria Estratégica",
                    desc: "Expertise em transformação digital e scaling para empresas parceiras e portfólio"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start gap-4 p-6 bg-white/5 rounded-xl"
                  >
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-light mb-2">{item.title}</h4>
                      <p className="text-light/70">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-space p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-poppins font-bold text-dark mb-6">
                📊 Indicadores de Performance
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { metric: "R$ 100M+", label: "Valor Total do Portfólio" },
                  { metric: "50+", label: "Projetos Desenvolvidos" },
                  { metric: "300%", label: "ROI Médio em 3 Anos" },
                  { metric: "15+", label: "Prêmios e Reconhecimentos" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-poppins font-bold text-dark mb-1">{item.metric}</div>
                    <div className="text-dark/70 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Processo de Investimento */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-poppins font-bold text-center mb-16 text-secondary"
          >
            🔄 Processo de Investimento
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                phase: "Due Diligence",
                icon: "📋",
                description: "Análise profunda de tecnologia, mercado, equipe e potencial",
                activities: ["Avaliação técnica", "Análise de mercado", "Assessment da equipe", "Projeções financeiras"]
              },
              {
                phase: "Estruturação", 
                icon: "🤝",
                description: "Definição de estrutura societária e governance",
                activities: ["Estrutura legal", "Governance corporativa", "Marcos de crescimento", "Alinhamento estratégico"]
              },
              {
                phase: "Aceleração",
                icon: "🚀", 
                description: "Suporte ativo com capital e expertise",
                activities: ["Aporte de capital", "Mentoria executiva", "Rede de contatos", "Scaling operacional"]
              },
              {
                phase: "Exit Strategy",
                icon: "🎯",
                description: "Maximização de valor para todos os stakeholders",
                activities: ["IPO preparation", "M&A strategy", "Spin-off options", "Dividend policy"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-poppins font-bold text-light mb-3">{item.phase}</h3>
                <p className="text-light/70 mb-4">{item.description}</p>
                <ul className="text-sm text-light/60 space-y-1">
                  {item.activities.map((activity, actIndex) => (
                    <li key={actIndex}>• {activity}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-space p-12 rounded-2xl"
          >
            <h2 className="text-3xl font-poppins font-bold text-dark mb-6">
              Pronto para Transformar o Futuro?
            </h2>
            <p className="text-dark/80 text-lg mb-8">
              Se você tem uma startup disruptiva ou é um investidor em busca de oportunidades 
              excepcionais, vamos conversar sobre como podemos criar valor juntos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-dark text-light px-8 py-3 rounded-full font-semibold hover:bg-dark/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Pitche sua Startup
              </motion.button>
              <motion.button
                className="border-2 border-dark text-dark px-8 py-3 rounded-full font-semibold hover:bg-dark hover:text-light transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Oportunidades de Investimento
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.a 
            href="/"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-poppins font-bold bg-gradient-space bg-clip-text text-transparent mb-4 inline-block"
          >
            Ávila.inc
          </motion.a>
          <p className="text-light/60">
            Construindo o futuro através da tecnologia
          </p>
        </div>
      </footer>
    </div>
  );
}