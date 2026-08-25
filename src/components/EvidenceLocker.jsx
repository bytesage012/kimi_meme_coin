import { clientData } from '../data/evidence.js';

export default function EvidenceLocker() {
  const evidence = clientData.evidence || {};
  const evidenceItems = Object.keys(evidence).map((key) => ({ key, ...evidence[key] }));

  return (
    <section id="locker">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">09 — Proof</span>
          <h2>Evidence Locker</h2>
        </div>
        <div className="locker-grid" id="lockerContainer">
          {evidenceItems.map((item) => {
            const has = item.url && item.url.trim() !== '';
            return (
              <div className="locker-card" key={item.key}>
                <span className="label">{item.label || 'Evidence'} <small>{item.description || ''}</small></span>
                {has ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">View →</a>
                ) : (
                  <span className="pending-label">Verification link pending</span>
                )}
              </div>
            );
          })}
        </div>
        <div className="locker-footnote">Don't trust the dog. <em>Check the chain.</em> ■</div>
      </div>
    </section>
  );
}
