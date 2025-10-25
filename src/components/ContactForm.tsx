"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  type: 'investment' | 'partnership' | 'startup';
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'investment'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simular envio - integração com MongoDB seria aqui
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Em produção, enviaria para API route que salva no MongoDB
      console.log('Dados do formulário:', formData);
      
      setSubmitted(true);
    } catch (error) {
      console.error('Erro ao enviar:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center"
      >
        <div className="text-6xl mb-4">✨</div>
        <h3 className="text-2xl font-poppins font-bold text-secondary mb-4">
          Obrigado pelo contato!
        </h3>
        <p className="text-light/70">
          Recebemos sua mensagem e entraremos em contato em até 24 horas.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl space-y-6"
    >
      <h3 className="text-2xl font-poppins font-bold text-secondary mb-6">
        Entre em Contato
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-light/80 mb-2" htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-light focus:border-secondary focus:outline-none"
          />
        </div>
        
        <div>
          <label className="block text-light/80 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-light focus:border-secondary focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-light/80 mb-2" htmlFor="company">Empresa</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-light focus:border-secondary focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-light/80 mb-2" htmlFor="type">Tipo de Interesse</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-light focus:border-secondary focus:outline-none"
        >
          <option value="investment">Oportunidades de Investimento</option>
          <option value="partnership">Parcerias Estratégicas</option>
          <option value="startup">Pitch de Startup</option>
        </select>
      </div>

      <div>
        <label className="block text-light/80 mb-2" htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-light focus:border-secondary focus:outline-none resize-none"
          placeholder="Conte-nos sobre seu projeto ou interesse..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-space py-3 rounded font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin"></div>
            Enviando...
          </div>
        ) : (
          'Enviar Mensagem'
        )}
      </motion.button>
    </motion.form>
  );
}