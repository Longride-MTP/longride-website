import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { Social, Action, Link } from '../../atoms';
import ImageBlock from '../../blocks/ImageBlock';

export default function Footer(props) {
	const {
		colors = 'bg-light-fg-dark',
		logo,
		title,
		text,
		primaryLinks,
		secondaryLinks,
		socialLinks = [],
		legalLinks = [],
		copyrightText,
		styles = {},
		enableAnnotations
	} = props;
	return (
		<footer
			className={classNames(
				'sb-component',
				'sb-component-footer',
				colors,
				styles?.self?.margin ? mapStyles({ padding: styles?.self?.margin }) : undefined,
				styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : 'px-4 py-4'
			)}
			{...(enableAnnotations && { 'data-sb-object-id': props?.__metadata?.id })}
		>
			<div className="mx-auto max-w-7xl">
				<div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-8">
					{logo?.url && (
						<div className="sm:col-span-3 lg:col-auto">
							{logo?.url && (
								<Link href="/" className="flex flex-col items-start">
									{logo && (
										<ImageBlock {...logo} className="inline-block w-auto" {...(enableAnnotations && { 'data-sb-field-path': 'logo' })} />
									)}
								</Link>
							)}
						</div>
					)}
					{text && (
						<Markdown
							options={{ forceBlock: true, forceWrapper: true }}
							className={classNames('sb-markdown', { 'mt-12': logo?.url })}
							{...(enableAnnotations && { 'data-sb-field-path': 'text' })}
						>
							{text}
						</Markdown>
					)}
					{socialLinks.length > 0 && (
						<div className="pb-6 mt-12">
							<ul className="flex flex-wrap items-center" {...(enableAnnotations && { 'data-sb-field-path': 'socialLinks' })}>
								{socialLinks.map((link, index) => (
									<li key={index} className="text-2xl mb-2 mr-8 lg:mr-12 last:mr-0">
										<Social {...link} {...(enableAnnotations && { 'data-sb-field-path': `.${index}` })} />
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</footer>
	);
}
