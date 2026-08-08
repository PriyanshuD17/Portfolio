import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Sun, Moon, Palette } from 'lucide-react';
import priyanshuPhoto from '../assets/priyanshu.jpg';

export default function Navbar({ themeMode, setThemeMode, accentColor, setAccentColor }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accentDropdown, setAccentDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const accents = [
    { id: 'cyan', label: 'Neon Cyan', color: '#00f2fe' },
    { id: 'violet', label: 'Quantum Purple', color: '#c084fc' },
    { id: 'emerald', label: 'Emerald Mint', color: '#00f5d4' },
    { id: 'amber', label: 'Solar Amber', color: '#fbbf24' }
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
        background: scrolled
          ? themeMode === 'dark'
            ? 'rgba(4, 7, 20, 0.88)'
            : 'rgba(255, 255, 255, 0.88)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
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
              boxShadow: '0 0 12px var(--primary-glow)'
            }}
          />
          <div>
            <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }} className="gradient-text">
              PRIYANSHU DUBEY
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  boxShadow: '0 0 8px var(--primary)'
                }}
              />
              Python Developer | AI Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
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

        {/* Controls: Mode Switch + Accent Picker + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Light / Dark Mode Toggle Switch */}
          <button
            onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
            title={`Switch to ${themeMode === 'dark' ? 'Light' : 'Dark'} Mode`}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 12px var(--primary-glow)'
            }}
          >
            {themeMode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Accent Color Picker Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setAccentDropdown(!accentDropdown)}
              title="Change Accent Color"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <Palette size={20} />
            </button>

            {accentDropdown && (
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '48px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-glow)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px',
                  boxShadow: 'var(--shadow-glass)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  minWidth: '165px',
                  zIndex: 110
                }}
              >
                <div style={{ fontSize: '0.72rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginBottom: '2px' }}>
                  Accent Color
                </div>
                {accents.map((acc) => (
                  <button
                    key={acc.id}
                    onClick={() => {
                      setAccentColor(acc.id);
                      setAccentDropdown(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 10px',
                      borderRadius: 'var(--radius-sm)',
                      background: accentColor === acc.id ? 'var(--primary-glow)' : 'transparent',
                      color: 'var(--text-main)',
                      fontSize: '0.85rem',
                      textAlign: 'left'
                    }}
                  >
                    <span
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: acc.color,
                        boxShadow: `0 0 8px ${acc.color}`
                      }}
                    />
                    {acc.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#contact" className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.85rem' }}>
            <Sparkles size={16} /> Contact
          </a>

          {/* Mobile Drawer Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              padding: '6px'
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
            background: 'var(--bg-card)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-glow)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-main)',
                fontSize: '1.05rem',
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
