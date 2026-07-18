type Props = {
	children: React.ReactNode;
	className?: string;
};

export default function Layout({ children, className = "" }: Props) {
	return (
		<div
			className={`w-full h-full inline-block bg-light dark:bg-dark 
        lg:p-32 md:p-12 sm:p-8 ${className}`}
		>
			{children}
		</div>
	);
}
