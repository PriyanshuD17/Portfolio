import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, CheckCircle2, Cpu, Zap, Star, Mail, MapPin, Phone, FileText, Bot } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  const titles = [
    'Python Developer',
    'AI / ML Engineer',
    'Conversational AI Specialist',
    'IoT & Hardware Integrator'
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        paddingTop: '150px',
        paddingBottom: '80px',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <div className="section-container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Priyanshu's Intro */}
          <div>
            <div className="section-tag">
              <Bot size={16} /> Python & Applied AI Engineer
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '20px'
              }}
            >
              Hi, I'm <span className="gradient-text">Priyanshu Dubey</span>
            </h1>

            <div
              style={{
                height: '40px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <Terminal size={20} color="var(--primary)" />
              <span
                key={currentTitleIndex}
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--primary)',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {titles[currentTitleIndex]}
              </span>
            </div>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.1rem',
                lineHeight: 1.7,
                marginBottom: '32px',
                maxWidth: '560px'
              }}
            >
              Motivated Computer Science graduate specializing in Python development and applied AI, with hands-on experience building conversational AI systems, voice synthesis engines (pyttsx3), NLP neural network models, and hardware IoT automation.
            </p>

            {/* Quick Contact Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <MapPin size={16} color="var(--primary)" /> Vadodara, Gujarat 390021
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <Phone size={16} color="var(--primary)" /> +91 83206 68030
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
              <a href="#projects" className="btn-primary">
                Flagship AI Project <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Contact & Links:
              </span>
              <a
                href="mailto:priyanshudubey172004@gmail.com"
                style={{
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--text-main)',
                  fontSize: '0.85rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <Mail size={16} color="var(--primary)" /> priyanshudubey172004@gmail.com
              </a>
            </div>
          </div>

          {/* Right Column: Code & Hackerence AI Showcase Card */}
          <div style={{ position: 'relative' }}>
            <div className="glass-panel animate-float" style={{ padding: '28px', position: 'relative', overflow: 'hidden' }}>
              {/* Card Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                </div>
                <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                  hackerence_ai.py
                </div>
              </div>

              {/* Code Snippet representing Hackerence AI */}
              <pre
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  color: 'var(--text-main)',
                  background: 'rgba(7, 9, 14, 0.8)',
                  padding: '20px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)',
                  overflowX: 'auto',
                  marginBottom: '24px'
                }}
              >
                <code>
                  <span style={{ color: '#c084fc' }}>class</span> <span style={{ color: '#38bdf8' }}>HackerenceAI</span>:<br />
                  &nbsp;&nbsp;<span style={{ color: '#c084fc' }}>def</span> <span style={{ color: '#fbbf24' }}>__init__</span>(self):<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;self.voice = pyttsx3.init()<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;self.model = GPT_BERT_NeuralEngine()<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;self.iot = HardwareController()<br />
                  <br />
                  &nbsp;&nbsp;<span style={{ color: '#c084fc' }}>def</span> <span style={{ color: '#fbbf24' }}>listen_and_respond</span>(self, input_speech):<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;intent = self.model.parse_nlp(input_speech)<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#34d399' }}>return</span> self.iot.execute(intent)
                </code>
              </pre>

              {/* Stat Highlights */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div
                  style={{
                    padding: '14px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <Cpu size={22} color="var(--primary)" />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-main)' }}>6 Semesters</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>AI R&D Project</div>
                  </div>
                </div>

                <div
                  style={{
                    padding: '14px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <Star size={22} color="var(--primary)" />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-main)' }}>4 Certifications</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Python & Gen AI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
