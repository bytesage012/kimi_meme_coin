import { JUP_URL } from '../constants.js';

export default function HowToBuy() {
  return (
    <section id="buy" className="alt">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">02 — Procedure</span>
          <h2>How To Buy</h2>
          <p className="section-sub">Three steps. She's watching to make sure you don't mess it up.</p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-num">01</div>
            <h3>Get a wallet + SOL</h3>
            <p>Install Phantom or Solflare, then fund it with SOL from an exchange or on-ramp of your choice.</p>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <h3>Open Jupiter</h3>
            <p>Head to the <a href={JUP_URL} target="_blank" rel="noopener">KIMI swap link</a> and connect your wallet.</p>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <h3>Verify, then swap</h3>
            <p>Double-check the contract address matches the one on this page before you confirm. Always.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
