import React, { useState } from 'react';
import { Cpu, Terminal, Code, Layers, CheckCircle2, Award, Zap, ShieldCheck } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      id: 'ai-python',
      title: 'Python & AI Engineering',
      icon: Terminal,
      skills: [
        { name: 'Python (Proficient)', level: 95, tag: 'Core Stack' },
        { name: 'Neural Networks & NLP', level: 90, tag: 'AI/ML' },
        { name: 'GPT / BERT Architecture Concepts', level: 88, tag: 'LLMs' },
        { name: 'Conversational AI Systems', level: 92, tag: 'NLP Engine' },
        { name: 'Text-to-Speech (pyttsx3)', level: 94, tag: 'Voice Synthesis' }
      ]
    },
    {
      id: 'languages',
      title: 'Software Development',
      icon: Code,
      skills: [
        { name: 'Java (Fundamentals)', level: 80, tag: 'Bootcamp Certified' },
        { name: 'JavaScript (Fundamentals)', level: 78, tag: 'Web Logic' },
        { name: 'Object-Oriented Programming', level: 90, tag: 'Architecture' },
        { name: 'Git & Version Control', level: 85, tag: 'Tools' },
        { name: 'Project Documentation & Specs', level: 92, tag: 'Communication' }
      ]
    },
    {
      id: 'systems',
      title: 'Systems & Hardware',
      icon: ShieldCheck,
      skills: [
        { name: 'Hardware Integration & IoT', level: 88, tag: 'Automation' },
        { name: 'Threat-Defense Security Logic', level: 84, tag: 'Systems' },
        { name: 'Project Management & Coordination', level: 90, tag: 'Leadership' },
        { name: 'Technical Research & Presentation', level: 92, tag: 'Academic R&D' }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState('ai-python');

  const currentCategory = skillCategories.find((c) => c.id === activeCategory);

  return (
    <section id="skills" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="section-container">
        <div className="section-tag">
          <Cpu size={14} /> Skills Matrix & Certifications
        </div>
        <h2 className="section-title">
          Technical <span className="gradient-text">Competencies</span>
        </h2>
        <p className="section-subtitle">
          Core technical skill set verified by hands-on multi-semester AI development and 4 industry certifications.
        </p>

        {/* Category Selector Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
          {skillCategories.map((cat) => {
            const IconComp = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="glass-panel"
                style={{
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  transition: 'all 0.3s ease',
                  border: activeCategory === cat.id ? '1px solid var(--border-glow)' : '1px solid var(--border-subtle)',
                  background: activeCategory === cat.id ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                  color: activeCategory === cat.id ? 'var(--primary)' : 'var(--text-muted)',
                  boxShadow: activeCategory === cat.id ? 'var(--shadow-glow)' : 'none'
                }}
              >
                <IconComp size={20} />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Skills Meter Grid */}
        <div className="glass-panel" style={{ padding: '40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
            {currentCategory.skills.map((skill) => (
              <div key={skill.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} color="var(--primary)" />
                    <span style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>{skill.name}</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>
                    {skill.tag}
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div
                  style={{
                    height: '8px',
                    width: '100%',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${skill.level}%`,
                      borderRadius: '4px',
                      background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)',
                      transition: 'width 0.8s ease-in-out',
                      boxShadow: '0 0 10px var(--primary-glow)'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
