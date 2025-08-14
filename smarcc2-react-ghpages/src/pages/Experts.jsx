import React from 'react'

const experts = [
  { name: 'Prof. Filippo Giancotti', email: 'FGGiancotti@mdanderson.org', org: 'MD Anderson (to verify)' },
  { name: 'Prof. Jiafu Long', email: 'jflong@nankai.edu.cn', org: 'Nankai University' },
  { name: 'Add your local geneticist', email: '—', org: '—' }
]

const Experts = () => (
  <div className="card">
    <h2 style={{marginTop:0}}>Clinicians & Researchers</h2>
    <p className="muted">You can edit and expand this directory.</p>
    <table style={{width:'100%', borderCollapse:'collapse'}}>
      <thead>
        <tr style={{textAlign:'left'}}>
          <th>Name</th><th>Institution</th><th>Contact</th>
        </tr>
      </thead>
      <tbody>
        {experts.map((e, i) => (
          <tr key={i}>
            <td>{e.name}</td>
            <td>{e.org}</td>
            <td>{e.email !== '—' ? <a href={\`mailto:\${e.email}\`}>{e.email}</a> : '—'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default Experts
