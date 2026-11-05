import React from 'react';
export default function SimpleView({ title, desc }) {
  return (
    <div className="fade-in" style={{padding:'2rem', textAlign:'center'}}>
      <h1 style={{fontSize:'2rem', color:'var(--primary)', marginBottom:'1rem'}}>{title}</h1>
      <div className="card glass"><p>{desc}</p></div>
    </div>
  );
}
