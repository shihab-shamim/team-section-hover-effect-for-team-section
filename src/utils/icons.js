const iconColor = '#4527a4';

export const blockIcon = (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    // stroke={iconColor} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Central Main Figure */}
    <circle cx="12" cy="8" r="4" />
    <path d="M12 12c-4 0-7 3-7 7v1h14v-1c0-4-3-7-7-7Z" />
    
    {/* Side Figures */}
    <circle cx="4" cy="11" r="2" opacity="0.5" />
    <path d="M1 15c0-2 1-3 3-3" opacity="0.5" />
    
    <circle cx="20" cy="11" r="2" opacity="0.5" />
    <path d="M23 15c0-2-1-3-3-3" opacity="0.5" />
  </svg>
); 

export const verticalLineIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 14.707 14.707'>
	<rect x='6.275' y='0' width='2.158' height='14.707' />
</svg>;

export const horizontalLineIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 357 357'>
	<path d='M357,204H0v-51h357V204z' />
</svg>;