import { GALLERY_ITEMS } from '../data/gallery.js';

export default function Exhibits() {
  return (
    <section id="exhibits">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">07 — Photo evidence</span>
          <h2>Exhibits On File</h2>
          <p className="section-sub">More photos, filed for the record. Judgmental in every frame.</p>
        </div>
        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item, i) => (
            <div className="item" key={i}>
              <div className="pin-photo">
                <div className="tape tl"></div>
                <div className="tape br"></div>
                <div className="pin-photo-frame">
                  <img src={item.src} alt={item.alt} />
                  <div className="pin-photo-cap">{item.cap}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
