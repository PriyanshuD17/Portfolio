import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Code2, Palette, Sun } from 'lucide-react';
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
    { id: 'light-cyan', label: 'Ocean Cyan', color: '#0284c7' },
    { id: 'light-indigo', label: 'Royal Indigo', color: '#4f46e5' },
    { id: 'light-emerald', label: 'Fresh Emerald', color: '#059669' },
    { id: 'light-coral', label: 'Sunset Coral', color: '#ea580c' }
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
        background: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.04)' : 'none'
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
                boxShadow: '0 0 12px var(--primary-glow)'
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
                  backgroundColor: '#10b981',
                  boxShadow: '0 0 8px #10b981'
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
              title="Change Light Palette"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#ffffff',
                border: '1px solid rgba(15, 23, 42, 0.12)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
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
                  background: '#ffffff',
                  border: '1px solid rgba(15, 23, 42, 0.12)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px',
                  boxShadow: '0 12px 30px rgba(15, 23, 42, 0.12)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  minWidth: '170px',
                  zIndex: 110
                }}
              >
                <div style={{ fontSize: '0.75rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px', fontWeight: 700 }}>
                  Light Palette
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
                      background: activeTheme === t.id ? 'rgba(2, 132, 199, 0.08)' : 'transparent',
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
                        boxShadow: `0 0 6px ${t.color}`
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
            background: '#ffffff',
            borderBottom: '1px solid rgba(15, 23, 42, 0.12)',
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
