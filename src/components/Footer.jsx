import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(7, 9, 14, 0.95)',
        padding: '40px 0 24px',
        marginTop: '60px'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000'
              }}
            >
              <Code2 size={18} />
            </div>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', fontFamily: 'var(--font-heading)' }} className="gradient-text">
              PRIYANSHU DUBEY
            </span>
          </div>

          <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Priyanshu Dubey. Python Developer & AI Engineer.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              padding: '10px 16px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-muted)',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--primary)';
              e.currentTarget.style.borderColor = 'var(--border-glow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
            }}
          >
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
