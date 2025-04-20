const Certifications = ({ certifications }) => {
  return (
    <section className="certifications-section">
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="cert-icon">📜</div>
            <p>{cert}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// CSS
.certifications-section {
  padding: 2rem;
  background: #f8f9fa;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.certification-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cert-icon {
  font-size: 1.5rem;
}
