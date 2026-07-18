"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import BrowserMockup from "./BrowserMockup";

type GalleryImage = {
	src: string;
	alt: string;
	caption?: string;
};

type Props = {
	images: GalleryImage[];
};

export function ProjectGallery({ images }: Props) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const currentImage = images[currentIndex];

	function openGallery(index = 0) {
		setCurrentIndex(index);

		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
		}
	}

	function closeGallery() {
		dialogRef.current?.close();
	}

	function showPrevious() {
		setCurrentIndex((index) =>
			index === 0 ? images.length - 1 : index - 1,
		);
	}

	function showNext() {
		setCurrentIndex((index) =>
			index === images.length - 1 ? 0 : index + 1,
		);
	}

	function handleKeyDown(event: React.KeyboardEvent<HTMLDialogElement>) {
		if (event.key === "ArrowLeft") {
			showPrevious();
		}

		if (event.key === "ArrowRight") {
			showNext();
		}
	}

	return (
		<>
			<button
				type="button"
				onClick={() => openGallery(0)}
				aria-label="Open Auri's Tavern image gallery"
				className="group relative min-w-0 w-full block cursor-zoom-in overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
			>
				<BrowserMockup
					src={images[0].src}
					alt={images[0].alt}
				/>

				<div className="absolute inset-0 grid place-items-center bg-black/0 transition-colors group-hover:bg-black/35">
					<span className="flex translate-y-2 items-center gap-2 rounded-lg bg-background/90 px-4 py-2 text-sm font-medium text-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
						<Maximize2 className="size-4" />
						View gallery
					</span>
				</div>
			</button>

			<dialog
				ref={dialogRef}
				aria-label="Auri's Tavern project gallery"
				onKeyDown={handleKeyDown}
				onClick={(event) => {
					if (event.currentTarget === event.target) {
						closeGallery();
					}
				}}
				className="m-auto h-[95dvh] w-[95vw] max-w-none overflow-hidden bg-transparent p-0 backdrop:bg-black/90"
			>
				<div className="relative flex h-full flex-col rounded-xl border border-white/15 bg-[#10110f] p-4 shadow-2xl">
					<button
						type="button"
						onClick={closeGallery}
						aria-label="Close gallery"
						className="absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-full bg-black/70 text-white transition-colors hover:bg-primary hover:text-primary-foreground hover:cursor-pointer"
					>
						<X className="size-5" />
					</button>

					<div className="relative min-h-0 flex-1">
						<Image
							src={currentImage.src}
							alt={currentImage.alt}
							fill
							sizes="95vw"
							className="object-contain"
							priority
						/>
					</div>

					{images.length > 1 ? (
						<div className="mt-4 flex items-center justify-between gap-4">
							<button
								type="button"
								onClick={showPrevious}
								aria-label="Show previous image"
								className="grid size-11 shrink-0 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary hover:cursor-pointer"
							>
								<ChevronLeft className="size-6" />
							</button>

							<div className="text-center">
								{currentImage.caption && (
									<p className="text-sm text-foreground">
										{currentImage.caption}
									</p>
								)}

								<p className="mt-1 text-xs text-muted-foreground">
									{currentIndex + 1} / {images.length}
								</p>
							</div>

							<button
								type="button"
								onClick={showNext}
								aria-label="Show next image"
								className="grid size-11 shrink-0 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary hover:cursor-pointer"
							>
								<ChevronRight className="size-6" />
							</button>
						</div>
					) : (
						<div className="text-center mt-3">
							{currentImage.caption && (
								<p className="text-sm text-foreground">
									{currentImage.caption}
								</p>
							)}
						</div>
					)}
				</div>
			</dialog>
		</>
	);
}
