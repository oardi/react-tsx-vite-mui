import React, { Suspense } from 'react';
import type { Root } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { App } from './app';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const rootElement: HTMLElement | null = document.getElementById('root');
const root: Root = createRoot(rootElement as HTMLElement);

root.render(
	<Suspense fallback={<div>Loading...</div>}>
		<App />
	</Suspense>
);
