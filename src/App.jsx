import { useRef, useState } from 'react';
import { CA, TOAST_MESSAGES } from './constants.js';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Ticker from './components/Ticker.jsx';
import CaseFile from './components/CaseFile.jsx';
import Breaker from './components/Breaker.jsx';
import HowToBuy from './components/HowToBuy.jsx';
import Citation from './components/Citation.jsx';
import GuiltMoney from './components/GuiltMoney.jsx';
import Mining from './components/Mining.jsx';
import Timeline from './components/Timeline.jsx';
import Exhibits from './components/Exhibits.jsx';
import Stats from './components/Stats.jsx';
import EvidenceLocker from './components/EvidenceLocker.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';
import Toast from './components/Toast.jsx';

export default function App() {
  const [toast, setToast] = useState({ show: false, msg: '' });
  const toastTimer = useRef(null);

  function showToast() {
    const msg = TOAST_MESSAGES[Math.floor(Math.random() * TOAST_MESSAGES.length)];
    setToast({ show: true, msg });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast((t) => ({ ...t, show: false })), 2200);
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) { /* noop */ }
    document.body.removeChild(ta);
  }

  function handleCopy() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(CA).then(showToast).catch(() => { fallbackCopy(CA); showToast(); });
    } else {
      fallbackCopy(CA);
      showToast();
    }
  }

  return (
    <>
      <Header />
      {/* Main content – add id for skip link target */}
      <main id="main-content" className="overflow-x-hidden">
        <Hero onCopy={handleCopy} />
        <Ticker />
        <CaseFile />
        <Breaker />
        <HowToBuy />
        <Citation />
        <GuiltMoney />
        <Mining />
        <Timeline />
        <Exhibits />
        <Stats />
        <EvidenceLocker />
        <Faq />
      </main>
      <Footer />
      <Toast show={toast.show} message={toast.msg} />
    </>
  );
}