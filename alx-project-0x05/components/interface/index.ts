// interfaces/index.ts

import { ReactNode } from "react";

// Interface for pages/index.tsx (Imperative Routing)
export interface PageRouteProps {
  pageRoute: string
}

// Interface for components/common/Button.tsx
export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}

// Interface for components/layouts/Layout.tsx
export interface LayoutProps {
  children: ReactNode;
}