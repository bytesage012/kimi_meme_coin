import { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq.js';

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq((cur) => (cur === i ? null : i));

  return (
    <section id="faq" className="alt">
      <div className="wrap">
        <div className="section-head center">
          <span className="section-num">10 — Interrogation</span>
          <h2>Frequently Asked</h2>
          <p className="section-sub">Questions get answered. Deflection is not tolerated here.</p>
        </div>
        <div className="faq-list" id="faq-list">
          {FAQ_ITEMS.map((item, i) => (
            <div className="faq-item" data-open={openFaq === i ? 'true' : 'false'} key={i}>
              <button className="faq-q" onClick={() => toggleFaq(i)}>
                <span><span className="idx">{String(i + 1).padStart(2, '0')}</span>{item.q}</span>
                <span className="chev">+</span>
              </button>
              <div className="faq-a"><p>{item.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
