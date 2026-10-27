import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppLayout } from '@/widgets/AppLayout';
import { PublicLayout } from '@/widgets/PublicLayout';
import { DashboardPage } from '@/pages/DashboardPage';
import { CalendarPage } from '@/pages/CalendarPage';
import { AppointmentsPage } from '@/pages/AppointmentsPage';
import { ClientsPage } from '@/pages/ClientsPage';
import { EmployeesPage } from '@/pages/EmployeesPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { LoginPage } from '@/pages/LoginPage';
import { BookingPage } from '@/pages/BookingPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'calendar', element: <CalendarPage /> },
      { path: 'appointments', element: <AppointmentsPage /> },
      { path: 'clients', element: <ClientsPage /> },
      { path: 'employees', element: <EmployeesPage /> },
      { path: 'services', element: <ServicesPage /> },
    ],
  },
  {
    element: <PublicLayout />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'book/demo-salon', element: <BookingPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
