# Slotly

Приложение для записи на услуги. Этап 1: базовая архитектура без бизнес-функциональности.

## Запуск

Требуется Node.js 22.12+ (или совместимая более новая версия).

```sh
npm install
cp .env.example .env
npm run dev
```

PowerShell: `Copy-Item .env.example .env`.

## Проверки

```sh
npm run lint
npm run typecheck
npm run build
npm run format:check
```

`npm run format` форматирует исходники, `npm run preview` запускает собранное приложение.

## Структура

- `src/app` — провайдеры, маршруты, глобальные SCSS-стили.
- `src/pages` — заглушки страниц.
- `src/widgets` — Sidebar, Header, административный и публичный layout.
- `src/shared` — конфигурация навигации, Axios, QueryClient, общие компоненты.

Папки features, entities, hooks, lib и types добавляются по мере появления кода.

## Маршруты

`/` перенаправляет на `/dashboard`. Административные страницы: `/dashboard`, `/calendar`, `/appointments`, `/clients`, `/employees`, `/services`. Публичные: `/login`, `/book/demo-salon`. Неизвестный адрес показывает 404 без административной навигации.

Авторизация, реальные записи, таблицы, календарь и формы пока не реализованы. Данные организации и администратора — заглушки. API-запросов при открытии страниц нет. Zustand установлен без преждевременного создания store.

`VITE_API_URL` задаёт адрес API. Переменные VITE_ доступны в браузере: секреты в них хранить нельзя. Axios использует credentials и timeout 10 секунд; QueryClient — staleTime 60 секунд, одну повторную попытку, без обновления при фокусе окна.

Для production-хостинга настройте SPA fallback на index.html, чтобы прямые ссылки на разделы работали.

## Адаптивность

При ширине до 768px меню открывается кнопкой в Header; закрывается кнопкой, кликом по фону и выбором страницы. Контрольные размеры: 1440px, 768px, 375px. Шрифт — системный Segoe UI/system-ui без внешних запросов.

## GitHub

Публичный репозиторий: https://github.com/Sonenka/slotly. Основная ветка: main.
