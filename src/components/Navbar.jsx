import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Code2, Palette, Bot, Cpu } from 'lucide-react';
import priyanshuPhoto from '../assets/priyanshu.jpg';

export default function Navbar({ activeTheme, setActiveTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdown, setThemeDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themes = [
    { id: 'ai-cyber', label: 'Cyber Neon', color: '#00f2fe' },
    { id: 'ai-matrix', label: 'Matrix Emerald', color: '#00ff9d' },
    { id: 'ai-quantum', label: 'Quantum Purple', color: '#c084fc' },
    { id: 'ai-solar', label: 'Solar Amber', color: '#fbbf24' }
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Flagship AI', href: '#projects' },
    { name: 'Skills & Certs', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(4, 7, 20, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 242, 254, 0.15)' : '1px solid transparent'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{ position: 'relative' }}>
            <img
              src={priyanshuPhoto}
              alt="Priyanshu Dubey"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center 15%',
                border: '2px solid var(--primary)',
                boxShadow: '0 0 15px var(--primary-glow)'
              }}
            />
          </div>
          <div>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }} className="gradient-text">
              PRIYANSHU DUBEY
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#00f2fe',
                  boxShadow: '0 0 10px #00f2fe'
                }}
              />
              Python Developer | AI Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Theme Picker & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Theme Dropdown Toggle */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setThemeDropdown(!themeDropdown)}
              title="Change AI Cyber Palette"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(0, 242, 254, 0.08)',
                border: '1px solid var(--border-glow)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                boxShadow: '0 0 15px var(--primary-glow)'
              }}
            >
              <Palette size={20} />
            </button>

            {themeDropdown && (
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '50px',
                  background: 'var(--bg-dark)',
                  border: '1px solid var(--border-glow)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.9), var(--shadow-glow)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  minWidth: '170px',
                  zIndex: 110
                }}
              >
                <div style={{ fontSize: '0.75rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px', fontWeight: 700 }}>
                  AI Cyber Palette
                </div>
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setActiveTheme(t.id);
                      setThemeDropdown(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      background: activeTheme === t.id ? 'rgba(0, 242, 254, 0.12)' : 'transparent',
                      color: 'var(--text-main)',
                      fontSize: '0.875rem',
                      textAlign: 'left'
                    }}
                  >
                    <span
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: t.color,
                        boxShadow: `0 0 10px ${t.color}`
                      }}
                    />
                    {t.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.875rem' }}>
            <Sparkles size={16} /> Contact Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              padding: '8px'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--bg-dark)',
            borderBottom: '1px solid var(--border-glow)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-main)',
                fontSize: '1.1rem',
                fontWeight: 600
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
