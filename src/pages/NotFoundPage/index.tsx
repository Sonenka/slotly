import { Link } from 'react-router-dom';
export function NotFoundPage() {
  return (
    <section className="public-card">
      <span className="eyebrow">ОШИБКА 404</span>
      <h1>Страница не найдена</h1>
      <p className="muted">
        Проверьте адрес или вернитесь в рабочее пространство.
      </p>
      <Link className="primary-link" to="/dashboard">
        На главную
      </Link>
    </section>
  );
}
