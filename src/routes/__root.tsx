// src/routes/__root.tsx
import { login } from '@/pages/login';
import { createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: login,
});



