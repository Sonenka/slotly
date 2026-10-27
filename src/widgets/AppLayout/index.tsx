import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/widgets/Sidebar';
import { Header } from '@/widgets/Header';
export function AppLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="app-layout">
      <a className="skip-link" href="#main">
        К содержимому
      </a>
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="main-area">
        <Header open={open} onMenu={() => setOpen(!open)} />
        <main id="main" className="content">
          <Outlet />
        </main>
        <footer className="page-footer">
          <span>С заботой о вашем времени</span>
          <span>Slotly · Пространство для роста</span>
        </footer>
      </div>
    </div>
  );
}
