import {
  LayoutDashboard,
  CalendarDays,
  ClipboardList,
  Users,
  UserRound,
  Scissors,
} from 'lucide-react';
export const navigation = [
  { to: '/dashboard', label: 'Главная', icon: LayoutDashboard },
  { to: '/calendar', label: 'Календарь', icon: CalendarDays },
  { to: '/appointments', label: 'Бронирования', icon: ClipboardList },
  { to: '/clients', label: 'Клиенты', icon: Users },
  { to: '/employees', label: 'Сотрудники', icon: UserRound },
  { to: '/services', label: 'Услуги', icon: Scissors },
];
