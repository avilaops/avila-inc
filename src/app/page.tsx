"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentMetric, setCurrentMetric] = useState(0);
  
  const metrics = [
    { number: "25+", label: "Projetos", icon: "🚀" },
    { number: "R$ 50M+", label: "Valor Gerido", icon: "💎" },
    { number: "5+", label: "Anos", icon: "⏱️" },
    { number: "2", label: "Países", icon: "🌍" },
  ];

  const portfolio = [
    { 
      name: "AvilaOps.com", 
      type: "DevOps & Cloud Solutions", 
      description: "Plataforma completa de DevOps e automação cloud",
      status: "Live"
    },
    { 
      name: "Ávila Infrastructure", 
      type: "Cloud Management", 
      description: "Gestão e otimização de infraestrutura Azure/AWS",
      status: "Live"
    },
    { 
      name: "Ávila AI Platform", 
      type: "AI Solutions", 
      description: "Soluções de IA para automação empresarial",
      status: "Development"
    },
  ];

  const areas = [
    { icon: "☁️", name: "DevOps & Cloud", desc: "Azure, AWS & Infrastructure Automation" },
    { icon: "🤖", name: "Inteligência Artificial", desc: "AI Solutions & Process Automation" },
    { icon: "🔒", name: "Cybersecurity", desc: "Security Operations & Compliance" },
    { icon: "📊", name: "Business Intelligence", desc: "Data Analytics & Insights" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [metrics.length]);

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
          <motion.div 
            className="text-2xl font-poppins font-bold bg-gradient-space bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Ávila.inc
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {["Portfólio", "Tecnologias", "Investidores", "Contato"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-light/80 hover:text-secondary transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            className="bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-2 rounded-full hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entrar em Contato
          </motion.button>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-poppins font-bold mb-8"
          >
            <span className="bg-gradient-space bg-clip-text text-transparent">
              Construindo o Futuro
            </span>
            <br />
            <span className="text-light">através da</span>
            <br />
            <motion.span 
              className="text-secondary animate-glow"
              animate={{ textShadow: ["0 0 20px #00E0FF", "0 0 40px #00E0FF", "0 0 20px #00E0FF"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Tecnologia
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-light/80 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Holding de tecnologia especializada em DevOps, Cloud Computing e Automação Empresarial
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button
              className="bg-gradient-space px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Empresas do Grupo
            </motion.button>
            
            <motion.button
              className="bg-white/5 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contato Comercial
            </motion.button>
          </motion.div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-secondary rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 1.3,
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Métricas */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div className="text-3xl md:text-4xl font-poppins font-bold text-secondary mb-2">
                  {metric.number}
                </div>
                <div className="text-light/60">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfólio */}
      <section id="portfolio" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-poppins font-bold text-center mb-16 bg-gradient-space bg-clip-text text-transparent"
          >
            Nosso Portfólio
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-poppins font-bold text-light">
                    {project.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    project.status === "Live" 
                      ? "bg-green-500/20 text-green-400" 
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-secondary font-semibold mb-3">{project.type}</p>
                <p className="text-light/60 leading-relaxed">{project.description}</p>
                
                <motion.div 
                  className="mt-6 inline-flex items-center text-secondary hover:text-light transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Saiba mais →
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="tecnologias" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-poppins font-bold text-center mb-16 bg-gradient-space bg-clip-text text-transparent"
          >
            Áreas de Atuação
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div 
                  className="text-6xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {area.icon}
                </motion.div>
                <h3 className="text-xl font-poppins font-bold text-light mb-4">
                  {area.name}
                </h3>
                <p className="text-light/60 text-sm">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-poppins font-bold bg-gradient-space bg-clip-text text-transparent mb-4"
          >
            Ávila.inc
          </motion.div>
          <p className="text-light/60 mb-8">
            Construindo o futuro através da tecnologia
          </p>
          <div className="flex justify-center space-x-6">
            <motion.a 
              href="#" 
              className="text-light/60 hover:text-secondary transition-colors"
              whileHover={{ y: -3 }}
            >
              LinkedIn
            </motion.a>
            <motion.a 
              href="#" 
              className="text-light/60 hover:text-secondary transition-colors"
              whileHover={{ y: -3 }}
            >
              Twitter
            </motion.a>
            <motion.a 
              href="#" 
              className="text-light/60 hover:text-secondary transition-colors"
              whileHover={{ y: -3 }}
            >
              GitHub
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
}
