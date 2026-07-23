type RouteBreadCrumb = {
	href: string;
	name: string;
};

export function BreadCrumbs({ routes }: { routes: RouteBreadCrumb[] }) {
	return (
		<div className="d-breadcrumbs text-sm">
			<ul>
				{routes.map(({ href, name }) => (
					<li key={name}>
						<a href={href}>{name}</a>
					</li>
				))}
			</ul>
		</div>
	);
}
