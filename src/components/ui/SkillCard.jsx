function SkillCard({ title, skills }) {
  return (
    <div className="skill-card">
      <h3 className="skill-title">{title}</h3>

      <div className="skill-items">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <skill.icon
              className="skill-icon"
              style={{ color: skill.color }}
            />
            <span className="skill-label">{skill.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
