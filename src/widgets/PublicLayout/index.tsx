import { Link, Outlet } from 'react-router-dom';
export function PublicLayout() {
  return (
    <div className="public-layout">
      <Link className="brand" to="/">
        slotly<span className="brand-dot">.</span>
      </Link>
      <main>
        <Outlet />
      </main>
      <p className="muted">Онлайн-запись с заботой о вашем времени</p>
    </div>
  );
}
