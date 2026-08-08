import React from 'react';
import { User, GraduationCap, Award, Briefcase, BookOpen, CheckCircle2, Code, Brain } from 'lucide-react';
import priyanshuPhoto from '../assets/priyanshu.jpg';

export default function About() {
  const certifications = [
    { title: 'Python Developer', issuer: 'Professional Certification', tag: 'Python' },
    { title: 'Generative AI', issuer: 'Applied AI & LLMs', tag: 'GenAI' },
    { title: 'Applied AI', issuer: 'Microsoft–SAP Joint Initiative', tag: 'AI/ML' },
    { title: 'Java Development Bootcamp', issuer: 'Software Engineering', tag: 'Java' }
  ];

  return (
    <section id="about" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="section-container">
        <div className="section-tag">
          <User size={14} /> Profile & Qualifications
        </div>
        <h2 className="section-title">
          About <span className="gradient-text">Priyanshu Dubey</span>
        </h2>
        <p className="section-subtitle">
          Computer Science graduate specializing in Python development, Neural Networks, NLP, and Hardware/IoT Automation.
        </p>

        {/* Profile Summary Card with Cropped Photo */}
        <div className="glass-panel" style={{ padding: '36px', marginBottom: '48px', borderLeft: '4px solid var(--primary)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={priyanshuPhoto}
                alt="Priyanshu Dubey"
                style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  border: '3px solid var(--primary)',
                  boxShadow: '0 0 30px var(--primary-glow), var(--shadow-glass)',
                  margin: '0 auto 12px'
                }}
              />
              <div style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-main)' }}>Priyanshu Dubey</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--primary)' }}>Python Developer | AI Engineer</div>
            </div>

            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Brain color="var(--primary)" size={24} /> Profile Summary
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.025rem', lineHeight: 1.8 }}>
                Motivated Computer Science graduate specializing in Python development and applied AI, with hands-on experience building a conversational AI system through progressive, multi-semester development. Skilled in Python, foundational Java and JavaScript, and core AI/ML concepts including NLP and neural networks. Strong project management, research, and communication skills. Seeking an entry-level Software Engineer / Python Developer / AI Engineer role.
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '60px' }}>
          {/* Education Card */}
          <div className="glass-panel-interactive" style={{ padding: '32px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <GraduationCap size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>B.Tech in CS / Software Eng.</h3>
            <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '8px' }}>ITM Vocational University</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>Vadodara, Gujarat, India</p>
            <span
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-main)',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              Completed: July 2026
            </span>
          </div>

          {/* Certifications Card */}
          <div className="glass-panel-interactive" style={{ padding: '32px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(192, 132, 252, 0.1)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <Award size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px' }}>Professional Certifications</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {certifications.map((cert) => (
                <div key={cert.title} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.925rem' }}>
                  <span style={{ color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} color="var(--primary)" /> {cert.title}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>{cert.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Briefcase color="var(--primary)" /> Experience & Contributions
          </h3>

          <div className="glass-panel-interactive" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-main)' }}>Student Contributor</h4>
                <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1rem' }}>ITM Vocational University</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span
                  style={{
                    padding: '4px 14px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-muted)',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  Started: July 2022
                </span>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '4px' }}>Vadodara, India</div>
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.6 }}>
                <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                Applied classroom knowledge to community service initiatives; contributed to positive local impact.
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.6 }}>
                <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                Researched and presented technical topics to peers, improving group comprehension of complex material.
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.6 }}>
                <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                Coordinated team communication and facilitated planning meetings to keep contributors aligned.
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.6 }}>
                <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                Maintained accurate project documentation for all stakeholders.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
