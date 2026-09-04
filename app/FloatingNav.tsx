'use client';

import { useEffect, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY >= window.innerHeight);
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className={`floating-nav${visible ? ' is-visible' : ''}`} aria-hidden={!visible}>
      <div className="site-shell">
        <nav className="nav-shell" aria-label="悬浮作品导航">
          <a className="brand" href="#top" aria-label="返回首页">
            <span className="brand-mark">M</span>
            <span>PORTFOLIO · 2026</span>
          </a>
          <div className="nav-links">
            <a href="#overview">项目概览</a>
            <a href="#experience">体验设计</a>
            <a href="#system">视觉系统</a>
          </div>
          <a className="contact-button" href="#contact">联系我 <ArrowDownRight size={16} /></a>
        </nav>
      </div>
    </div>
  );
}
