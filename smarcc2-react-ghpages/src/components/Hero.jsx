import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => (
  <section className="hero container">
    <div>
      <h1 style={{fontSize: 42, margin: '0 0 10px'}}>Coffin–Siris & SMARCC2</h1>
      <p className="muted" style={{fontSize: 18}}>
        Clear, updatable information about SMARCC2-related conditions, with resources for families and clinicians.
      </p>
      <div style={{display:'flex', gap:12, marginTop: 18}}>
        <Link to="/donate" className="btn">Support (coming soon)</Link>
        <a className="btn secondary" href="https://meshi-1987.github.io/coffin-siris/" target="_blank" rel="noreferrer">Current Site</a>
      </div>
    </div>
    <div className="card">
      <h3 style={{marginTop:0}}>Quick Links</h3>
      <ul>
        <li><a href="#/articles">Peer‑reviewed articles</a></li>
        <li><a href="#/experts">Clinicians & researchers</a></li>
        <li><a href="#/contact">Contact & media</a></li>
      </ul>
    </div>
  </section>
)
export default Hero
