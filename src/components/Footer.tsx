import Layout from "./Layout";

export default function Footer() {
	return (
		<footer className="flex w-full border-t border-solid border-dark/30 dark:border-light/30 font-medium text-lg">
			<Layout className="py-3! px-3! flex items-center justify-between dark:!bg-dark">
				<span className="text-sm text-muted-foreground">
					&copy; {new Date().getFullYear()} Cristopher Morales. All
					rights reserved.
				</span>
			</Layout>
		</footer>
	);
}
