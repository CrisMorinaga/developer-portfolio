export function MainPresentation() {
	return (
		<div className="flex flex-col flex-1 gap-5 items-start justify-center max-[1100px]:items-center">
			<p className="text-primary md:text-base text-xs">
				FULL-STACK DEVELOPER · BASED IN JAPAN
			</p>
			<div className="font-display relative tracking-[0.25em] lg:text-6xl max-[1100px]:text-center md:text-5xl text-[40px]">
				CRISTOPHER MORALES
				<span className="text-primary relative lg:right-[10px] right-[5px] bottom-0 lg:text-6xl text-5xl font-display">
					.
				</span>
				<p
					style={{
						WebkitTextStroke: "1px hsl(var(--foreground))",
					}}
					className="absolute font-display text-transparent text-[270px] -top-30 opacity-20 max-[1100px]:hidden"
				>
					C
				</p>
				<p
					style={{
						WebkitTextStroke: "1px hsl(var(--foreground))",
					}}
					className="absolute font-display text-transparent text-[270px] -bottom-30 right-20 opacity-20 max-[1100px]:hidden"
				>
					M
				</p>
			</div>
		</div>
	);
}
