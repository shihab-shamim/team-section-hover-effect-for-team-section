import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getBoxCSS, getColorsCSS ,getMultiShadowCSS} from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { styles = {} } = attributes;

	const mainSl = `#${id}`;
	const teamSectionSl = `${mainSl} .tsbwhe-main`;
	const teamProfileSl = `${teamSectionSl} .tsbwhe-profile-card`;

	return <style dangerouslySetInnerHTML={{
		__html: `

		${teamSectionSl}{
		${getBackgroundCSS(styles?.bg)}
		padding:${getBoxCSS(styles?.padding?.desktop)};
		margin:${getBoxCSS(styles?.margin?.desktop)};
		border-radius:${getBoxCSS(styles?.radius)};
		 grid-template-columns: repeat(${styles?.columns?.desktop}, ${styles?.teamProfile?.width});
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
		box-shadow:${getMultiShadowCSS(styles?.teamProfile?.shadow)};

		
		}
		${teamProfileSl}:hover{
			height: ${styles?.teamProfile?.hoverHeight} !important;
			
		}

		${teamProfileSl}:hover .tsbwhe-img {
			transform: translateY(${ styles?.teamProfile?.image?.translateY}px) !important;
		}
			${teamProfileSl}:hover{
			    border-radius: ${getBoxCSS(styles?.teamProfile?.hoverRadius)};
                height: 260px;
				img{
					border-radius: ${getBoxCSS(styles?.teamProfile?.image?.hoverRadius)} !important;
				} 
			}

			${teamProfileSl} .tsbwhe-img img{
			    width: ${styles?.teamProfile?.image?.width};
                height: ${styles?.teamProfile?.image?.height};
                border-radius: ${getBoxCSS(styles?.teamProfile?.image?.radius)};
                box-shadow: ${getMultiShadowCSS(styles?.teamProfile?.image?.shadow)};
				object-fit:${styles?.teamProfile?.image?.imageFit};
			
			}


		${tabBreakpoint}{
		${teamSectionSl}{
		 grid-template-columns: repeat(${styles?.columns?.tablet}, ${styles?.teamProfile?.width});
		 padding:${getBoxCSS(styles?.padding?.tablet)};
		margin:${getBoxCSS(styles?.margin?.tablet)};
         	}
		}
				${mobileBreakpoint}{
		${teamSectionSl}{
		 grid-template-columns: repeat(${styles?.columns?.mobile}, ${styles?.teamProfile?.width});
		 padding:${getBoxCSS(styles?.padding?.mobile)};
		margin:${getBoxCSS(styles?.margin?.mobile)};
         	}
		}
		
		

	`}} />;
}
export default Style;