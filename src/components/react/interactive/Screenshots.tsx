import { memo } from "react";
import type { ScreenshotsProps } from "@/types/app";
import { areImagesEqual } from "@/types/app";

const Screenshots = ({ images }: ScreenshotsProps) => {
	const currentImages = images["iphone"];

	return (
		<div className="mb-16">
			<div
				className={`relative overflow-hidden min-h-["400px"]`}
			>
				<div className="screenshots-container overflow-x-auto scrollbar-thin scrollbar-track-gray-200 dark:scrollbar-track-white/5 scrollbar-thumb-gray-400 dark:scrollbar-thumb-white/10 hover:scrollbar-thumb-gray-500 dark:hover:scrollbar-thumb-white/20">
					<div className="flex gap-6 pb-4">
						{currentImages.map((image, index) => (
							<button
								key={image}
								type="button"
								onClick={() => window.openLightbox?.(index, "iphone")}
								className="relative flex-shrink-0 overflow-hidden rounded-xl focus:outline-none"
							>
								<img
									src={image}
									alt={`Screenshot ${index + 1}`}
									className="rounded-xl border border-gray-300 dark:border-white/10 object-cover shadow-lg aspect-[9/16] w-[260px]"
									loading="lazy"
								/>
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(Screenshots, areImagesEqual);
