function TickerRow() {
  return (
    <span>
      <span>She watches you buy the top.</span>
      <span>She watches you sell the bottom.</span>
      <span>She knows about the "trading only" wallet.</span>
      <span>She has concerns.</span>
      <span>Don't trust the dog. Check the chain.</span>
    </span>
  );
}

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {/* two identical copies are required for the seamless translateX(-50%) loop */}
        <TickerRow />
        <TickerRow />
      </div>
    </div>
  );
}
