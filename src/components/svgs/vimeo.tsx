import * as React from 'react';

export default function Vimeo({ className, ...props }) {
	return (
		<svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
			<path d="M22.824 6.954c-0.095 2.113-1.572 5.010-4.423 8.685-2.954 3.838-5.446 5.757-7.492 5.757-1.273 0-2.33-1.17-3.211-3.508l-1.733-6.43c-0.65-2.335-1.345-3.505-2.090-3.505-0.162 0-0.728 0.342-1.7 1.023l-1.020-1.317c1.343-1.181 2.373-2.104 3.396-3.035l-0.232 0.208c1.427-1.236 2.499-1.884 3.212-1.951 1.687-0.163 2.726 0.994 3.115 3.469 0.42 2.669 0.713 4.328 0.878 4.977 0.487 2.214 1.022 3.321 1.605 3.321 0.454 0 1.135-0.719 2.047-2.156 0.907-1.436 1.392-2.528 1.457-3.279 0.13-1.239-0.357-1.863-1.459-1.863-0.519 0-1.055 0.109-1.606 0.353 1.072-3.496 3.104-5.203 6.111-5.095 2.235 0.054 3.279 1.504 3.157 4.335z"></path>
		</svg>
	);
}
