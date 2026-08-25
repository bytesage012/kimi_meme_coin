import { CA, JUP_URL, X_URL, TG_URL, DEX_URL } from '../constants.js';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="footer-word">KIMI</div>
            <p className="footer-tag">Solana's judgmental bitch. She's not going anywhere — she's watching.</p>
          </div>
          <ul className="footer-links">
            <li><a href={X_URL} target="_blank" rel="noopener">X / Twitter</a></li>
            <li><a href={TG_URL} target="_blank" rel="noopener">Telegram</a></li>
            <li><a href={DEX_URL} target="_blank" rel="noopener">DexScreener</a></li>
            <li><a href={JUP_URL} target="_blank" rel="noopener">Buy KIMI</a></li>
          </ul>
        </div>
        <div className="footer-ca">
          <span>CA: {CA}</span>
          <span className="footer-close">She's still watching.</span>
        </div>
        <div className="fine-print">KIMI is a memecoin with no intrinsic value or expectation of financial return. Not financial advice. Do your own research — she certainly does.</div>
      </div>
    </footer>
  );
}
