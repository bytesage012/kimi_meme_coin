import { CA, JUP_URL, X_URL, DEX_URL } from '../constants.js';

export default function Hero({ onCopy }) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Live on Solana</span>
          <h1 className="hero-title">Still holding<br />that? <em>Cute.</em></h1>
          <p className="hero-sub"><strong>KIMI is Solana's judgmental bitch.</strong> She found crypto and has been disappointed ever since. She's not impressed by your entry, your bags, or the wallet you swear is "just for trading."</p>

          <div className="ca-box">
            <span className="ca-label">Contract</span>
            <code id="ca-text">{CA}</code>
            <button className="copy-btn" id="copy-btn" onClick={onCopy}>Copy</button>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href={JUP_URL} target="_blank" rel="noopener">Buy KIMI</a>
            <a className="btn btn-ghost" href={X_URL} target="_blank" rel="noopener">X / Twitter</a>
            <a className="btn btn-ghost" href={DEX_URL} target="_blank" rel="noopener">Chart</a>
          </div>
        </div>

        <div className="pin-photo">
          <div className="tape tl"></div>
          <div className="tape br"></div>
          <div className="stamp">Case<br />Open</div>
          <div className="pin-photo-frame">
            <img src="assets/kimi-photo.png" alt="Kimi, a long-haired black and white Chihuahua, staring judgmentally at the camera" />
            <div className="pin-photo-cap">Exhibit A — Kimi, unimpressed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
