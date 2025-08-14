import React from 'react'

const Footer = () => (
  <footer>
    <div className="container small" style={{display:'flex', gap:12, justifyContent:'space-between', padding:'20px 24px'}}>
      <span>© <span id="year">{new Date().getFullYear()}</span> SMARCC2 Community. All rights reserved.</span>
      <span><a href="https://github.com" target="_blank" rel="noreferrer">Deploy on GitHub Pages</a></span>
    </div>
  </footer>
)
export default Footer
