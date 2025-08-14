import React from 'react'

const articles = [
  { title: 'SMARCC2 and BAF complex disorders — review', href: 'https://pubmed.ncbi.nlm.nih.gov/?term=SMARCC2' },
  { title: 'Coffin–Siris (ARID1/BAF) spectrum overview', href: 'https://www.ncbi.nlm.nih.gov/books/NBK131811/' },
  { title: 'Latest PubMed search for SMARCC2', href: 'https://pubmed.ncbi.nlm.nih.gov/?term=SMARCC2%5BTitle%2FAbstract%5D' }
]

const Articles = () => (
  <div className="card">
    <h2 style={{marginTop:0}}>Peer‑reviewed articles</h2>
    <p className="muted">Curated links. You can edit this list later.</p>
    <ul>
      {articles.map((a, i) => (
        <li key={i}><a href={a.href} target="_blank" rel="noreferrer">{a.title}</a></li>
      ))}
    </ul>
  </div>
)

export default Articles
