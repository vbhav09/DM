export function OpeningOfferPopup() {
  return <div className="opening-popup">
    <input className="opening-popup-toggle" id="close-opening-offer" type="checkbox" aria-hidden="true" />
    <div className="opening-popup-backdrop" role="dialog" aria-modal="true" aria-label="Durga Motors employment offer">
      <div className="opening-popup-card">
        <label className="opening-popup-close" htmlFor="close-opening-offer" aria-label="Close offer popup">×</label>
        <img src="/rozgar-auto-offer.jpeg" alt="Apna Rozgar electric and diesel auto employment offer from Durga Motors" />
      </div>
    </div>
  </div>;
}
