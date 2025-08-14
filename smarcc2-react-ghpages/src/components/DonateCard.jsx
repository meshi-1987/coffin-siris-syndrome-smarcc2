import React from 'react'

const DonateCard = () => (
  <div className="card">
    <h2 style={{marginTop:0}}>Donate</h2>
    <p className="muted">
      The donation path is not active yet. When it’s ready, we’ll enable the buttons below.
    </p>
    <div style={{display:'grid', gap:10, gridTemplateColumns:'repeat(auto-fit, minmax(180px,1fr))', marginTop:12}}>
      <button className="btn disabled" disabled>Credit Card (soon)</button>
      <button className="btn disabled" disabled>PayPal (soon)</button>
      <button className="btn disabled" disabled>Bank Transfer (soon)</button>
    </div>
    <p className="small" style={{marginTop:12}}>
      Want to be notified when donating opens? Email us at <a href="mailto:contact@smarcc2.org">contact@smarcc2.org</a>.
    </p>
  </div>
)
export default DonateCard
