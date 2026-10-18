import {
  ArrowDown, ArrowRight, ArrowUpRight, ChartNoAxesColumnIncreasing,
  Check, Compass, Layers3, Link2, Menu, PanelsTopLeft, Sparkles, X,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { siteConfig, whatsappUrl } from "../data/site-config";

const icons = {
  sparkles: Sparkles,
  layout: PanelsTopLeft,
  panels: Layers3,
  chart: ChartNoAxesColumnIncreasing,
  compass: Compass,
  link: Link2,
} as const;

function ContactLink({ message, children, className = "" }: {
  message: string; children: ReactNode; className?: string;
}) {
  const href = whatsappUrl(message);
  return (
    <a className={className} href={href || "#orcamento"}
      aria-label={href ? undefined : "Ir para orçamento e configurar contato"}
      title={href ? undefined : "Configure o WhatsApp em src/data/site-config.ts"}>
      {children}
    </a>
  );
}

export function BioSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [
    ["Serviços", "#servicos"], ["Sobre", "#sobre"], ["Portfólio", "#portfolio"],
  ];
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a href="#inicio" className="wordmark" aria-label="ELEVVA DIGITAL — início">
          ELEVVA<span className="wordmark-dot">.</span><small>DIGITAL</small>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navegação principal">
          {nav.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#orcamento" onClick={closeMenu}>Vamos conversar <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span className="eyebrow-line" />ESTRATÉGIA · CRIATIVIDADE · PRESENÇA</p>
          <h1 id="hero-title">Ideias que<br />elevam <em>marcas.</em></h1>
          <p className="hero-copy">A ELEVVA DIGITAL transforma a presença online da sua marca em uma experiência com intenção, personalidade e direção.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#servicos">Conheça os serviços <ArrowRight size={17} /></a>
            <a className="text-link" href="#sobre">Descubra a ELEVVA <ArrowDown size={15} /></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orb orb-back" /><div className="orb orb-front" />
          <div className="art-ring ring-one" /><div className="art-ring ring-two" />
          <div className="art-star">✳</div>
          <div className="art-caption"><span>EST. DIGITAL</span><span>◦ 01 — 06</span></div>
        </div>
        <div className="hero-bottom"><span>ESTRATÉGIA COM INTENÇÃO</span><span>DESLIZE PARA EXPLORAR ↓</span></div>
      </section>

      <section className="services section-wrap" id="servicos" aria-labelledby="services-title">
        <div className="section-heading">
          <div><p className="eyebrow eyebrow-dark">O QUE FAZEMOS</p><h2 id="services-title">Presença com<br /><em>propósito.</em></h2></div>
          <p className="section-intro">Soluções criativas para construir uma marca mais forte, coerente e pronta para crescer no digital.</p>
        </div>
        <div className="service-grid">
          {siteConfig.services.map((service) => {
            const Icon = icons[service.icon];
            const message = `Olá! Gostaria de saber mais sobre ${service.title} da ELEVVA DIGITAL.`;
            return <article className="service-card" key={service.number}>
              <div className="card-top"><span>{service.number}</span><Icon size={22} strokeWidth={1.5} /></div>
              <h3>{service.title}</h3><p>{service.description}</p>
              <ContactLink message={message} className="card-link">Solicitar serviço <ArrowUpRight size={16} /></ContactLink>
            </article>;
          })}
        </div>
      </section>

      <section className="about" id="sobre" aria-labelledby="about-title">
        <div className="about-mark" aria-hidden="true"><span>E</span><i>✳</i></div>
        <div className="about-copy">
          <p className="eyebrow">POR TRÁS DA ELEVVA</p>
          <h2 id="about-title">Mais do que presença.<br /><em>Uma marca com direção.</em></h2>
          <p>Acreditamos que uma marca forte nasce do encontro entre estratégia e criatividade. A ELEVVA DIGITAL existe para ajudar negócios a se comunicarem com mais clareza, consistência e personalidade.</p>
          <a className="text-link light-link" href="#portfolio">Conheça nosso trabalho <ArrowRight size={16} /></a>
        </div>
        <div className="about-side-note">CRIATIVIDADE<br />COM INTENÇÃO<br /><span>— ELEVVA DIGITAL</span></div>
      </section>

      <section className="difference section-wrap" aria-labelledby="difference-title">
        <div className="section-heading">
          <div><p className="eyebrow eyebrow-dark">O JEITO ELEVVA</p><h2 id="difference-title">O cuidado está<br /><em>em cada detalhe.</em></h2></div>
          <p className="section-intro">Uma parceria próxima, com escolhas que fazem sentido para a sua marca e para quem ela quer alcançar.</p>
        </div>
        <div className="difference-list">
          {siteConfig.differentiators.map((item) => <article className="difference-item" key={item.number}>
            <span className="difference-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><Check size={18} className="difference-check" />
          </article>)}
        </div>
      </section>

      <section className="portfolio" id="portfolio" aria-labelledby="portfolio-title">
        <div className="portfolio-copy">
          <p className="eyebrow">IDEIAS QUE GANHAM FORMA</p>
          <h2 id="portfolio-title">Um pouco do<br /><em>nosso universo.</em></h2>
          <p>Explore o portfólio e conheça projetos, conceitos e possibilidades criativas.</p>
          <a className="button button-outline" href={siteConfig.portfolioUrl} target="_blank" rel="noreferrer">
            Explorar portfólio <ArrowUpRight size={17} />
          </a>
        </div>
        <a className="portfolio-art" href={siteConfig.portfolioUrl} target="_blank" rel="noreferrer" aria-label="Abrir portfólio da ELEVVA DIGITAL em nova aba">
          <div className="portfolio-frame"><span className="frame-kicker">PORTFÓLIO</span><span className="frame-title">ELEVVA<br /><em>CREATIVE</em></span><span className="frame-index">2025 — 2026&nbsp;&nbsp; ↗</span></div>
          <span className="portfolio-sticker">VER<br />PROJETOS ↗</span>
        </a>
      </section>

      <section className="quote section-wrap" id="orcamento" aria-labelledby="quote-title">
        <p className="eyebrow eyebrow-dark">SEU PRÓXIMO PASSO COMEÇA AQUI</p>
        <h2 id="quote-title">Vamos elevar<br /><em>a sua marca?</em></h2>
        <p>Conte um pouco sobre o seu projeto. Vamos encontrar juntos o melhor caminho para a sua presença digital.</p>
        <ContactLink message="Olá! Gostaria de conversar sobre um projeto com a ELEVVA DIGITAL." className="button button-purple">
          Solicitar orçamento <ArrowRight size={17} />
        </ContactLink>
        {!siteConfig.whatsappPhone && !siteConfig.email && <small className="setup-note">Para ativar os contatos, edite os dados em <code>src/data/site-config.ts</code>.</small>}
      </section>

      <footer className="site-footer">
        <a href="#inicio" className="wordmark footer-wordmark">ELEVVA<span className="wordmark-dot">.</span><small>DIGITAL</small></a>
        <span className="footer-note">Estratégia, criatividade e presença digital.</span>
        <div className="footer-links">
          <a href={siteConfig.portfolioUrl} target="_blank" rel="noreferrer">Portfólio <ArrowUpRight size={13} /></a>
          {siteConfig.instagramUrl && <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a>}
          {siteConfig.email && <a href={`mailto:${siteConfig.email}`}>E-mail <ArrowUpRight size={13} /></a>}
        </div>
        <span className="copyright">© {new Date().getFullYear()} ELEVVA DIGITAL</span>
      </footer>
    </main>
  );
}
