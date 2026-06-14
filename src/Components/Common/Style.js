import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getBoxCSS, getColorsCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { styles={} } = attributes;

	const mainSl = `#${id}`;
	const teamSectionSl = `${mainSl} .tsbwhe-main`;
	const teamProfileSl = `${teamSectionSl} .tsbwhe-profile-card `;

	return <style dangerouslySetInnerHTML={{
		__html: `

		${teamSectionSl}{
		${getBackgroundCSS(styles?.bg)}
		padding:${getBoxCSS(styles?.padding?.desktop)};
		margin:${getBoxCSS(styles?.margin?.desktop)};
		border-radius:${getBoxCSS(styles?.radius)};
		 grid-template-columns: repeat(${styles?.columns?.desktop}, 220px);
		 		column-gap: ${styles?.columnGap || 50}px;
			row-gap: ${styles?.rowGap || 50}px;
            justify-content: ${styles?.align};


		
		}

		${teamProfileSl}{
		${getBackgroundCSS(styles?.teamProfile?.bg)},
		width:${styles?.teamProfile?.width};
		height:${styles?.teamProfile?.height};
		border-radius:${getBoxCSS(styles?.teamProfile?.radius)};
		padding:${getBoxCSS(styles?.teamProfile?.padding)};

		
		}



		${tabBreakpoint}{
		${teamSectionSl}{
		 grid-template-columns: repeat(${styles?.columns?.tablet}, 220px);
		 padding:${getBoxCSS(styles?.padding?.tablet)};
		margin:${getBoxCSS(styles?.margin?.tablet)};
         	}
		}
				${mobileBreakpoint}{
		${teamSectionSl}{
		 grid-template-columns: repeat(${styles?.columns?.mobile}, 220px);
		 padding:${getBoxCSS(styles?.padding?.mobile)};
		margin:${getBoxCSS(styles?.margin?.mobile)};
         	}
		}
		
		

	`}} />;
}
export default Style;