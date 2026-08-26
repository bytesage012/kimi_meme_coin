export default function Mining() {
  return (
    <section id="mining">
      <div className="wrap mining-grid">
        <div className="mining-copy">
          <div className="section-head" style={{ marginBottom: '24px' }}>
            <span className="section-num">05 — Operations</span>
            <h2>The Mining Department</h2>
          </div>
          <p>Kimi put 1 SOL to work mining ORE on Solana, with proceeds returning to the KIMI
treasury. Yes, the dog now has an industrial division.</p>
          <p>Currently a little over 2 ORE is sitting on the official ORE mining site, still unrefined. The wallet is public — the receipts are considerably less exciting than the memes.</p>
        </div>
        <div className="mining-figure">
          <div className="label">Seed funding</div>
          <div className="big">
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 30c9-4 15-10 19-19 3 3 6 7 8 12-9 4-15 10-19 19-3-3-6-7-8-12Z" /><path d="M6 42 18 30" /></svg>
            1<span> SOL</span>
          </div>
          <div className="flow">
            <span>ORE Mining</span><span className="arrow">→</span><span>Treasury</span><span className="arrow">→</span><span>Community</span>
          </div>
        </div>
      </div>
    </section>
  );
}
