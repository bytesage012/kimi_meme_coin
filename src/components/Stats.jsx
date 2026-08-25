import { DEX_URL } from '../constants.js';

export default function Stats() {
  return (
    <section id="stats" className="alt">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">08 — By the numbers</span>
          <h2>The Numbers</h2>
          <p className="section-sub">Verified figures. No placeholder blockchain data.</p>
        </div>
        <div className="stats-grid">
          <div className="stat-cell">
            <div className="stat-num">59M</div>
            <div className="stat-label">KIMI Burned</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num">50%</div>
            <div className="stat-label">Creator Rewards to Charity</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num">1 SOL</div>
            <div className="stat-label">Mining Seed</div>
          </div>
        </div>
        <p className="stats-note">Live market data available on <a href={DEX_URL} target="_blank" rel="noopener">DexScreener</a>.</p>
      </div>
    </section>
  );
}
