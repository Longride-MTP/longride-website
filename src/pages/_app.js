import { useEffect } from 'react';
import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		if (typeof window === 'undefined') return;

		const target = document.querySelector('#__next');
		if (!target) return;

		const cleanSemicolonNodes = () => {
			target.childNodes.forEach((node) => {
				if (node.nodeType === 3 && node.textContent.trim() === ';') {
					node.textContent = ''; // just wipe it instead of removing
				}
			});
		};

		// Clean once on mount
		cleanSemicolonNodes();

		// Watch for future hydration inserts
		const observer = new MutationObserver(cleanSemicolonNodes);
		observer.observe(target, { childList: true });

		return () => observer.disconnect();
	}, []);

	return <Component {...pageProps} />;
}
