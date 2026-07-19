export default function Footer() {
	return (
		<footer className="flex w-full py-3 px-3 items-center justify-between dark:bg-dark border-t border-solid border-dark/30 dark:border-light/30 font-medium text-lg">
			<span className="text-sm text-muted-foreground">
				&copy; {new Date().getFullYear()} Cristopher Morales. All rights
				reserved.
			</span>
		</footer>
	);
}
