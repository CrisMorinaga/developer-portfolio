export function TechnologyCards({ title }: { title: string }) {
	return (
		<div className="flex items-center border border-[#afafaf] p-1 px-2 text-muted-foreground rounded-sm text-xs">
			{title}
		</div>
	);
}
