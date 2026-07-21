import Image from "next/image";

type BrowserMockupProps = {
	src: string;
	alt: string;
};

export default function BrowserMockup({ src, alt }: BrowserMockupProps) {
	return (
		<div className="d-mockup-browser border border-[#000000]">
			<div className="d-mockup-browser-toolbar">
				<div className="d-input dark:bg-[#252721] bg-[#dedbd4]">
					https://rstavernchat.com
				</div>
			</div>
			<Image
				className="w-auto h-auto"
				alt={alt}
				src={src}
				width={650}
				height={650}
			/>
		</div>
	);
}
