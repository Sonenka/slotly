import { Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { navigation } from '@/shared/config/navigation';
export function Header({
  onMenu,
  open,
}: {
  onMenu: () => void;
  open: boolean;
}) {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <div className="header-title">
        <button
          className="icon-button menu-button"
          onClick={onMenu}
          aria-label="Открыть меню"
          aria-expanded={open}
          aria-controls="admin-navigation"
        >
          <Menu />
        </button>
        <span>
          {navigation.find((item) => item.to === pathname)?.label ?? 'Slotly'}
        </span>
      </div>
      <div className="organization">
        <span>Demo Salon</span>
        <span className="header-divider" />
        <span className="avatar" aria-label="Администратор">
          АД
        </span>
      </div>
    </header>
  );
}
