type FormFieldProps = {
	id: string;
	label: string;
	type?: "text" | "email";
	placeholder: string;
	autoComplete?: string;
	minLength?: number;
	maxLength?: number;
};

export function FormField({
	id,
	label,
	type = "text",
	placeholder,
	autoComplete,
	minLength,
	maxLength,
}: FormFieldProps) {
	return (
		<div>
			<label
				htmlFor={id}
				className="block text-sm font-semibold text-foreground"
			>
				{label}
			</label>

			<input
				id={id}
				name={id}
				type={type}
				required
				minLength={minLength}
				maxLength={maxLength}
				autoComplete={autoComplete}
				placeholder={placeholder}
				className="mt-3 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground/70 focus:border-primary"
			/>
		</div>
	);
}
