import React from 'react'
import Hero from '../components/Hero.jsx'

const Home = () => (
  <>
    <Hero />
    <div className="grid">
      <div className="card">
        <h3 style={{marginTop:0}}>What is SMARCC2?</h3>
        <p>
          SMARCC2 encodes a core subunit of the BAF (SWI/SNF) chromatin remodeling complex.
          Pathogenic variants have been associated with neurodevelopmental syndromes including features overlapping Coffin–Siris syndrome.
        </p>
      </div>
      <div className="card">
        <h3 style={{marginTop:0}}>Families & clinicians</h3>
        <p>
          We maintain a list of peer‑reviewed studies, a directory of clinicians, and a WhatsApp support group for parents.
        </p>
      </div>
      <div className="card">
        <h3 style={{marginTop:0}}>Transparency</h3>
        <p>
          Our donation pathway will launch soon. Until then, this page is a placeholder so you can review and edit content.
        </p>
      </div>
    </div>
  </>
)
export default Home
