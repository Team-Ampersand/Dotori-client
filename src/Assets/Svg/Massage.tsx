import * as React from 'react';

function Massage(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width="1em" height="1em" viewBox="0 0 40 40" {...props}>
			<path d="M11.667 18.333v3.334h16.666v-3.334c0-3.1 2.134-5.683 5-6.433V10c0-2.75-2.25-5-5-5H11.667c-2.75 0-5 2.25-5 5v1.9c2.866.75 5 3.333 5 6.433z" />
			<path d="M35 15a3.343 3.343 0 00-3.333 3.333V25H8.333v-6.667C8.333 16.5 6.833 15 5 15a3.343 3.343 0 00-3.333 3.333v8.334c0 2.75 2.25 5 5 5v1.666c0 .917.75 1.667 1.666 1.667C9.25 35 10 34.25 10 33.333v-1.666h20v1.666c0 .917.75 1.667 1.667 1.667.916 0 1.666-.75 1.666-1.667v-1.666c2.75 0 5-2.25 5-5v-8.334C38.333 16.5 36.833 15 35 15z" />
		</svg>
	);
}

const MemoMassage = React.memo(Massage);
export default MemoMassage;
