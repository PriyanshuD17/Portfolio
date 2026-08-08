import React, { useState } from 'react';
import { ExternalLink, Sparkles, Code2, Eye, Filter, Cpu, ShieldAlert, Volume2, Bot } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Hackerence AI — Flagship AI Assistant',
      category: 'Flagship AI',
      description: 'Independent 6-semester conversational AI assistant engineered with pyttsx3 voice synthesis, GPT/BERT-style neural networks, IoT hardware control, and threat-defense algorithms.',
      longDescription: 'Hackerence AI is a comprehensive multi-semester R&D project built from the ground up in Python. It features a custom voice-driven conversational pipeline, context-aware neural response generation inspired by GPT/BERT architecture, direct electronic circuit integration for physical IoT device manipulation, and threat-defense security monitoring.',
      tech: ['Python', 'pyttsx3', 'Neural Networks', 'GPT/BERT Concepts', 'Hardware Integration / IoT', 'Threat Defense'],
      metrics: [
        { label: 'R&D Timeline', value: '6 Semesters' },
        { label: 'Voice Pipeline', value: 'pyttsx3 TTS' },
        { label: 'Architecture', value: 'Neural NLP + IoT' }
      ],
      features: [
        'Built a conversational AI assistant progressively over six semesters of R&D',
        'Engineered voice-based interface (pyttsx3) with GPT/BERT-style neural network concepts for context-aware responses',
        'Integrated with electronic hardware to control physical devices in IoT-style automation',
        'Built-in threat-defense security features and automated monitoring'
      ],
      liveUrl: 'https://github.com/priyanshudubey172004',
      githubUrl: 'https://github.com/priyanshudubey172004'
    },
    {
      id: 2,
      title: 'Neural Speech Synthesizer & NLP Parser',
      category: 'Conversational AI',
      description: 'Offline voice assistant engine combining text-to-speech (pyttsx3) with intent classification for desktop productivity automation.',
      longDescription: 'A modular Python audio-intelligence engine capable of parsing user voice commands offline, interpreting intent via lightweight neural net embeddings, and providing instant voice feedback.',
      tech: ['Python', 'pyttsx3', 'Speech Recognition', 'NLP', 'JSON Specs'],
      metrics: [
        { label: 'Latency', value: '< 150ms' },
        { label: 'Offline Ready', value: '100%' }
      ],
      features: [
        'Low-latency text-to-speech audio feedback',
        'Custom intent classification dictionary',
        'Automated file & app launch triggers'
      ],
      liveUrl: 'https://github.com/priyanshudubey172004',
      githubUrl: 'https://github.com/priyanshudubey172004'
    },
    {
      id: 3,
      title: 'IoT Microcontroller & Smart Relay Suite',
      category: 'Hardware & IoT',
      description: 'Python hardware controller interfacing with microcontrollers and relay boards for physical device automation.',
      longDescription: 'Electronic circuit integration project allowing Python scripts to read sensor telemetry and actuate physical switches, appliances, and security modules safely.',
      tech: ['Python', 'PySerial / GPIO', 'Hardware Electronics', 'Relay Switches', 'IoT'],
      metrics: [
        { label: 'Pin Protocols', value: 'GPIO/Serial' },
        { label: 'Response', value: 'Realtime' }
      ],
      features: [
        'Physical appliance relay switching via Python commands',
        'Safety interlock and overcurrent protection protocols',
        'Realtime sensor telemetry monitoring'
      ],
      liveUrl: 'https://github.com/priyanshudubey172004',
      githubUrl: 'https://github.com/priyanshudubey172004'
    },
    {
      id: 4,
      title: 'GPT / BERT Text Analysis Pipeline',
      category: 'Applied AI/ML',
      description: 'Exploratory Python notebook and engine implementing transformer-style attention layers and text embeddings.',
      longDescription: 'Hands-on neural network implementation exploring BERT transformer tokenization, sentence embeddings, and context window management for question answering.',
      tech: ['Python', 'PyTorch Concepts', 'Transformers', 'NLP', 'BERT/GPT'],
      metrics: [
        { label: 'Model Layers', value: 'Transformer' },
        { label: 'Task', value: 'Context QA' }
      ],
      features: [
        'Custom tokenization and embedding vector creation',
        'Attention weight visualization',
        'Context-based text generation experiment'
      ],
      liveUrl: 'https://github.com/priyanshudubey172004',
      githubUrl: 'https://github.com/priyanshudubey172004'
    }
  ];

  const categories = ['All', 'Flagship AI', 'Conversational AI', 'Hardware & IoT', 'Applied AI/ML'];

  const filteredProjects = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="section-container">
        <div className="section-tag">
          <Bot size={14} /> Flagship AI & R&D Projects
        </div>
        <h2 className="section-title">
          Featured <span className="gradient-text">AI Systems & Projects</span>
        </h2>
        <p className="section-subtitle">
          Showcasing Hackerence AI—a 6-semester conversational AI project—alongside Python NLP, voice synthesis, and hardware integration projects.
        </p>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '10px 22px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                background: activeFilter === cat ? 'linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%)' : 'rgba(255, 255, 255, 0.04)',
                color: activeFilter === cat ? '#000' : 'var(--text-muted)',
                border: activeFilter === cat ? 'none' : '1px solid var(--border-subtle)',
                boxShadow: activeFilter === cat ? '0 4px 15px var(--primary-glow)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '32px' }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel-interactive"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                border: project.id === 1 ? '1px solid var(--border-glow)' : '1px solid var(--border-subtle)',
                boxShadow: project.id === 1 ? 'var(--shadow-glow), var(--shadow-glass)' : 'var(--shadow-glass)'
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: 'var(--primary)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(56, 189, 248, 0.1)'
                    }}
                  >
                    {project.category}
                  </span>
                  <div style={{ color: 'var(--text-dim)', display: 'flex', gap: '12px' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <GithubIcon size={18} />
                    </a>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.75rem',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--primary)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-main)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Eye size={16} /> View Full Project Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal render */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
}
