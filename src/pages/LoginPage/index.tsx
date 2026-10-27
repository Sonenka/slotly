export function LoginPage() {
  return (
    <section className="public-card">
      <span className="eyebrow">ДОБРО ПОЖАЛОВАТЬ</span>
      <h1>Вход в Slotly</h1>
      <p className="muted">
        Авторизация появится на следующем этапе. Сейчас административные разделы
        доступны без входа.
      </p>
      <a className="primary-link" href="/dashboard">
        Перейти в приложение
      </a>
    </section>
  );
}
