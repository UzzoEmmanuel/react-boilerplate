import React from 'react';

export const homeRoutes = [
  {
    path: '/',
    Component: React.lazy(() => import('../home')),
    index: true,
  },
];
