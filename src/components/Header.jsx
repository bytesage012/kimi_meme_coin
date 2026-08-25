import { useState } from 'react';
import { JUP_URL, X_URL, TG_URL } from '../constants.js';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const closeNav = () => setNavOpen(false);

  return (
    <header className="site">
      <nav className="wrap">
        <a href="#" className="wordmark">KIMI <span>· SOL</span></a>
        <button
          className="nav-toggle"
          id="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
        </button>
        <ul className={`nav-links${navOpen ? ' open' : ''}`} id="nav-links">
          <li><a href="#lore" onClick={closeNav}>Case File</a></li>
          <li><a href="#buy" onClick={closeNav}>How To Buy</a></li>
          <li><a href="#tokenomics" onClick={closeNav}>Citation</a></li>
          <li><a href="#exhibits" onClick={closeNav}>Exhibits</a></li>
          <li><a href="#locker" onClick={closeNav}>Evidence</a></li>
          <li><a href="#faq" onClick={closeNav}>FAQ</a></li>
          <li><a href={X_URL} target="_blank" rel="noopener" onClick={closeNav}>X</a></li>
          <li><a href={TG_URL} target="_blank" rel="noopener" onClick={closeNav}>Telegram</a></li>
          <li><a className="btn-buy" href={JUP_URL} target="_blank" rel="noopener" onClick={closeNav}>Buy KIMI</a></li>
        </ul>
      </nav>
    </header>
  );
}
