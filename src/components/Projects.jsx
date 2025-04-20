const Projects = ({ projects }) => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <ul className="project-details">
              {project.content.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <div className="tech-stack">
              {project.tech?.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Update projects data structure:
export const projects = [
  {
    id: "project-1",
    title: "Stock Market Price Prediction",
    content: [
      "Developed LSTM-based prediction model with 92% accuracy",
      "Integrated real-time data feeds from Yahoo Finance API",
      "Built interactive dashboard for result visualization"
    ],
    tech: ["Python", "TensorFlow", "LSTM", "Pandas", "Matplotlib"]
  },
  // Add other projects similarly
];
