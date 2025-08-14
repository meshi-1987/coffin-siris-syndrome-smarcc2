import React from 'react'
import DonateCard from '../components/DonateCard.jsx'

const Donate = () => (
  <div className="grid">
    <DonateCard />
    <div className="card">
      <h3 style={{marginTop:0}}>How donations will be used</h3>
      <ul>
        <li>Clinical consultations and second‑opinion reviews</li>
        <li>Genetic counseling & family support</li>
        <li>Open‑access publication fees for SMARCC2 studies</li>
        <li>Small grants for data collection & registry building</li>
      </ul>
    </div>
  </div>
)
export default Donate
