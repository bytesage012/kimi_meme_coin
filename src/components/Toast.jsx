export default function Toast({ show, message }) {
  return (
    <div className={`toast${show ? ' show' : ''}`} id="toast">{message || "Copied. Don't waste it."}</div>
  );
}
