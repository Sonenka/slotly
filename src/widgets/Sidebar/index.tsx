import { NavLink } from 'react-router-dom';
import { X, ArrowUpRight, Sparkles } from 'lucide-react';
import { navigation } from '@/shared/config/navigation';
export function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <button
        className={open ? 'backdrop visible' : 'backdrop'}
        onClick={onClose}
        aria-label="Закрыть меню"
        tabIndex={open ? 0 : -1}
      />
      <aside
        id="admin-navigation"
        className={open ? 'sidebar open' : 'sidebar'}
      >
        <div className="brand">
          <span className="brand-mark">
            <Sparkles size={23} />
          </span>
          slotly<span className="brand-dot">.</span>
          <button
            className="icon-button close-menu"
            onClick={onClose}
            aria-label="Закрыть меню"
          >
            <X />
          </button>
        </div>
        <div className="workspace">
          <span className="salon-icon">D</span>
          <div>
            <strong>Demo Salon</strong>
            <small>Рабочее пространство</small>
          </div>
          <span className="online-dot" />
        </div>
        <p className="nav-caption">УПРАВЛЕНИЕ</p>
        <nav aria-label="Основная навигация">
          {navigation.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <Icon size={20} />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="stage-label">
            <span className="online-dot" />
            Начало большого дела
          </div>
          <p>
            Всё для вашего бизнеса.
            <br />В одном пространстве.
          </p>
          <NavLink to="/book/demo-salon">
            Страница записи <ArrowUpRight size={16} />
          </NavLink>
          <div className="sidebar-footer">
            Slotly <span>Этап 01 / 10</span>
          </div>
        </div>
      </aside>
    </>
  );
}
