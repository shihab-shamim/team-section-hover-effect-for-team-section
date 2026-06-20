// const iconColor = '#4527a4';

// A circular team avatar with a cursor pointer arrow on it — signalling the
// interactive hover effect that transforms the member on pointer-over.
export const blockIcon = (
	<svg xmlns='http://www.w3.org/2000/svg' width={30} height={30} viewBox='0 0 24 24'>
		<circle cx='10' cy='9' r='5.6'  opacity='0.12' />
		<circle cx='10' cy='9' r='5.6' fill='none'  strokeWidth='1.5' />
		<circle cx='10' cy='7.4' r='1.9'  />
		<path d='M6.2 12.6c0-2.1 1.7-3.3 3.8-3.3s3.8 1.2 3.8 3.3z'  />
		<path d='M13.8 12l7 2.6-2.9 1.3 1.7 3.1-1.6.9-1.7-3.1-2.5 2z' stroke='#ffffff' strokeWidth='0.6' strokeLinejoin='round' />
	</svg>
);

export const verticalLineIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 14.707 14.707'>
	<rect x='6.275' y='0' width='2.158' height='14.707' />
</svg>;

export const horizontalLineIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 357 357'>
	<path d='M357,204H0v-51h357V204z' />
</svg>;
