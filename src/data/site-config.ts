export const siteConfig = {
  brand: "ELEVVA DIGITAL",
  tagline: "Sua presença digital, em outro nível.",
  portfolioUrl: "https://portfoliotalita.lovable.app",
  // Preencha somente com dados oficiais antes de publicar.
  whatsappPhone: "",
  email: "",
  instagramUrl: "",
  services: [
    { number: "01", icon: "sparkles", title: "Identidade visual", description: "Uma marca que traduz o seu valor e permanece na memória." },
    { number: "02", icon: "layout", title: "Social media", description: "Conteúdo estratégico para criar presença e conexão." },
    { number: "03", icon: "panels", title: "Sites & landing pages", description: "Experiências digitais pensadas para apresentar e converter." },
    { number: "04", icon: "chart", title: "Tráfego pago", description: "Campanhas orientadas por estratégia e objetivos claros." },
    { number: "05", icon: "compass", title: "Estratégia digital", description: "Direção para comunicar melhor e crescer com consistência." },
    { number: "06", icon: "link", title: "Bio site", description: "Seus principais links reunidos em uma experiência elegante." },
  ],
  differentiators: [
    { number: "01", title: "Estratégia antes da estética", text: "Cada escolha visual e cada mensagem têm um propósito." },
    { number: "02", title: "Feito para a sua marca", text: "Soluções pensadas para o momento e os objetivos do seu negócio." },
    { number: "03", title: "Clareza em cada etapa", text: "Um processo próximo, organizado e alinhado do início ao fim." },
  ],
} as const;

export function whatsappUrl(message: string) {
  const phone = siteConfig.whatsappPhone.replace(/\D/g, "");
  return phone ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : "";
}
