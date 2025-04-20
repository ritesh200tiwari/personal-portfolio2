const Experience = ({ experiences }) => {
  return (
    <section className="experience-section">
      <h2>Professional Experience</h2>
      {experiences.map((exp) => (
        <div key={exp.organisation} className="experience-card">
          <h3>{exp.organisation}</h3>
          {exp.positions.map((position) => (
            <div key={position.title} className="position">
              <div className="position-header">
                <h4>{position.title}</h4>
                <span>{position.duration}</span>
              </div>
              <ul className="achievements-list">
                {position.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

// CSS
.experience-section {
  padding: 2rem 0;
}

.experience-card {
  background: white;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.position-header {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}

.achievements-list li {
  margin: 0.5rem 0;
  padding-left: 1rem;
  position: relative;
}

.achievements-list li::before {
  content: "▹";
  position: absolute;
  left: 0;
  color: #2563eb;
}
