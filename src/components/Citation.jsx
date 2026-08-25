export default function Citation() {
  return (
    <section id="tokenomics">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">03 — Allocations</span>
          <h2>The Citation</h2>
          <p className="section-sub">Itemized charges, filed against nobody in particular. No hidden line items.</p>
        </div>
        <div className="ticket">
          <div className="ticket-item">
            <div className="ticket-code">01</div>
            <div className="ticket-desc">
              <h3>Creator Rewards</h3>
              <p>50% animal charity, 50% KIMI operations. Full breakdown and mechanism below in <a href="#charity">Where The Guilt Money Goes</a>.</p>
            </div>
            <div className="ticket-amount">50 / 50</div>
          </div>
          <div className="ticket-item">
            <div className="ticket-code">02</div>
            <div className="ticket-desc">
              <h3>Mining Department</h3>
              <p>Kimi put 1 SOL to work mining ORE on Solana. Proceeds return to the KIMI treasury.</p>
            </div>
            <div className="ticket-amount">1 SOL seed</div>
          </div>
          <div className="ticket-item">
            <div className="ticket-code">03</div>
            <div className="ticket-desc">
              <h3>Supply &amp; Burn</h3>
              <p><strong>59M KIMI burned</strong> across two transactions — 50M + 9M. Verifiable on-chain, see <a href="#locker">Evidence Locker</a>.</p>
            </div>
            <div className="ticket-amount">59M burned</div>
          </div>
          <div className="ticket-footer">FILED, TRACEABLE, ON-CHAIN</div>
        </div>
      </div>
    </section>
  );
}
