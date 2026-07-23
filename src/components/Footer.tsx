export default function Footer() {
	return (
		<footer className="flex w-full py-3 px-5 items-center justify-between border-t border-solid font-medium text-lg">
			<span className="text-sm text-muted-foreground">
				&copy; {new Date().getFullYear()} Cristopher Morales. All rights
				reserved.
			</span>
		</footer>
	);
}
