import { ArrowUpRight, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
export function PagePlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section>
      <div className="page-heading">
        <div>
          <p className="eyebrow">ВАШЕ РАБОЧЕЕ ПРОСТРАНСТВО</p>
          <h1>{title}</h1>
          <p className="muted">{description}</p>
        </div>
        <span className="badge">Основа готова</span>
      </div>
      <div className="placeholder">
        <div className="placeholder-icon">
          <Construction size={32} strokeWidth={1.5} />
        </div>
        <span className="eyebrow">СКОРО В SLOTLY</span>
        <h2>Здесь начинается порядок</h2>
        <p>
          Мы готовим этот раздел, чтобы управлять вашим
          <br className="desktop-break" /> бизнесом было ещё проще.
        </p>
        <span className="stage-pill">Этап 1 · Базовая архитектура</span>
      </div>
      <div className="info-strip">
        <div>
          <strong>Больше времени для главного</strong>
          <p>Записи, команда и клиенты — скоро всё будет под рукой.</p>
        </div>
        <Link to="/book/demo-salon">
          Страница записи <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
