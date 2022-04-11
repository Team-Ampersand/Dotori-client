import * as React from 'react';

function Arrowdown(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={10} height={10} fill="none" {...props}>
			<path
				transform="rotate(-90 0 10)"
				fill="url(#prefix__pattern90)"
				fillOpacity={0.3}
				d="M0 10h10v10H0z"
			/>
			<defs>
				<pattern
					id="prefix__pattern90"
					patternContentUnits="objectBoundingBox"
					width={1}
					height={1}
				>
					<use
						xlinkHref="#prefix__image0_103_11039"
						transform="scale(.00195)"
					/>
				</pattern>
				<image
					id="prefix__image0_103_11039"
					width={512}
					height={512}
					xlinkHref="data:image/png;base64,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"
				/>
			</defs>
		</svg>
	);
}

const MemoArrowdown = React.memo(Arrowdown);
export default MemoArrowdown;
