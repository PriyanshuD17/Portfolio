import React from 'react';
import { X, ExternalLink, CheckCircle2, Server, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#ffffff',
          border: '1px solid var(--border-glow)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
          padding: '32px',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-main)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Content */}
        <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 'var(--radius-full)', background: 'rgba(56,189,248,0.1)', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '16px' }}>
          {project.category}
        </div>

        <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '12px', color: 'var(--text-main)' }}>
          {project.title}
        </h3>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '24px' }}>
          {project.longDescription || project.description}
        </p>

        {/* Project Metrics */}
        {project.metrics && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '28px' }}>
            {project.metrics.map((m, idx) => (
              <div key={idx} style={{ padding: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>{m.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Core Key Features */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Layers size={18} color="var(--primary)" /> Architecture & Features
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {(project.features || ['Realtime synchronization', 'Custom responsive design system', 'End-to-end encryption & RBAC security']).map((feat, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                <CheckCircle2 size={16} color="var(--primary)" /> {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Tags */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-dim)', marginBottom: '10px' }}>Technologies Used:</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--primary)',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href={project.liveUrl || '#'} target="_blank" rel="noreferrer" className="btn-primary" style={{ flex: 1 }}>
            <ExternalLink size={18} /> Live Demo
          </a>
          <a href={project.githubUrl || '#'} target="_blank" rel="noreferrer" className="btn-secondary" style={{ flex: 1 }}>
            <GithubIcon size={18} /> View Code
          </a>
        </div>
      </div>
    </div>
  );
}
