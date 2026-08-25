import { clientData } from '../data/evidence.js';

export default function GuiltMoney() {
  const opsWallet = (clientData.evidence && clientData.evidence.operationsWallet) || {};
  const hasOpsUrl = opsWallet.url && opsWallet.url.trim() !== '';

  return (
    <section id="charity" className="alt">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">04 — Where it goes</span>
          <h2>Where The Guilt Money Goes</h2>
          <p className="section-sub">Creator rewards, accounted for. No mystery wallet, no vibes-based spending.</p>
        </div>
        <div className="panel-grid">
          <div className="panel">
            <div className="panel-icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M24 40c8-6 16-12.5 16-21A9 9 0 0 0 24 13a9 9 0 0 0-16 6c0 8.5 8 15 16 21Z" /><circle cx="15" cy="16" r="2.4" fill="currentColor" stroke="none" /><circle cx="33" cy="16" r="2.4" fill="currentColor" stroke="none" /><circle cx="10" cy="23" r="2.2" fill="currentColor" stroke="none" /><circle cx="38" cy="23" r="2.2" fill="currentColor" stroke="none" /></svg>
            </div>
            <span className="pct">50%</span>
            <h3>The Charity Half</h3>
            <p>50% of creator rewards is automatically allocated to <a href="https://www.humaneworld.org/en" target="_blank" rel="noopener noreferrer">Humane World for Animals</a> through Pump.fun's creator-rewards setup. No manual transfer, no discretion after the split. Kimi's judgment has limits.</p>
          </div>
          <div className="panel">
            <div className="panel-icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 14a4 4 0 0 1 4-4h26a4 4 0 0 1 4 4v3H6v-3Z" /><path d="M6 17h32a4 4 0 0 1 4 4v13a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V17Z" /><circle cx="33" cy="26" r="2.6" fill="currentColor" stroke="none" /></svg>
            </div>
            <span className="pct">50%</span>
            <h3>The KIMI Half</h3>
            <p>The other 50% is used to buy KIMI. Purchased KIMI is then transferred to the public marketing wallet for project operations — not burned, not promised as price support. Transactions are public and verifiable on-chain, and every buy is called out on Pump.fun when it happens.</p>
            <a
              href={hasOpsUrl ? opsWallet.url : undefined}
              className={`wallet-link${hasOpsUrl ? '' : ' pending'}`}
              id="publicWalletLink"
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={hasOpsUrl ? undefined : 'true'}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path d="M20 12H4" /><circle cx="16" cy="16" r="1.2" fill="currentColor" stroke="none" /></svg>
              <span id="publicWalletLabel">{hasOpsUrl ? 'View Public Wallet' : 'Verification link pending'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
