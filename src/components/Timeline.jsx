import { TIMELINE_ITEMS } from '../data/timeline.js';

export default function Timeline() {
  return (
    <section id="timeline" className="alt">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">06 — Case log</span>
          <h2>Case Timeline</h2>
          <p className="section-sub">A dated record of events, filed as they happened. Nothing retroactively added to look better.</p>
        </div>
        <div className="timeline">
          {TIMELINE_ITEMS.map((item, i) => (
            <div className="tl-item" key={i}>
              <div className="tl-date">{item.date}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
