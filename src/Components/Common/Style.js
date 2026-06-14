import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getColorsCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { styles={} } = attributes;

	const mainSl = `#${id}`;
	const teamSectionSl = `${mainSl} .tsbwhe-main`;

	return <style dangerouslySetInnerHTML={{
		__html: `

		${teamSectionSl}{
		 grid-template-columns: repeat(${styles?.columns?.desktop}, 220px);
		 		column-gap: ${styles?.columnGap || 50}px;
			row-gap: ${styles?.rowGap || 50}px;
		
		}

		${tabBreakpoint}{
		${teamSectionSl}{
		 grid-template-columns: repeat(${styles?.columns?.tablet}, 220px);
         	}
		}
				${mobileBreakpoint}{
		${teamSectionSl}{
		 grid-template-columns: repeat(${styles?.columns?.mobile}, 220px);
         	}
		}
		
		

	`}} />;
}
export default Style;