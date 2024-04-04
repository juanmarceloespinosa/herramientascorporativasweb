import * as types from './bulma.types.js';
import { classnames, type ClsArgument } from './classnames.js';

export function bulmaClassnames(src: types.BulmaHelper = {}, className: ClsArgument = ''): string {
	return classnames(className, {
		[`has-text-${src.textColor}`]: src.textColor,
		[`has-background-${src.backColor}`]: src.backColor,

		[`m-${src.m}`]: src.m != undefined,
		[`mx-${src.mx}`]: src.mx != undefined,
		[`my-${src.my}`]: src.my != undefined,
		[`mt-${src.mt}`]: src.mt != undefined,
		[`mb-${src.mb}`]: src.mb != undefined,
		[`ml-${src.ml}`]: src.ml != undefined,
		[`mr-${src.mr}`]: src.mr != undefined,

		[`p-${src.p}`]: src.p != undefined,
		[`px-${src.px}`]: src.px != undefined,
		[`py-${src.py}`]: src.py != undefined,
		[`pt-${src.pt}`]: src.pt != undefined,
		[`pb-${src.pb}`]: src.pb != undefined,
		[`pl-${src.pl}`]: src.pl != undefined,
		[`pr-${src.pr}`]: src.pr != undefined,

		[`is-size-${src.textSize}`]: src.textSize,
		[`is-size-${src.textSizeMobile}-mobile`]: src.textSizeMobile,
		[`is-size-${src.textSizeTouch}-touch`]: src.textSizeTouch,
		[`is-size-${src.textSizeTablet}-tablet`]: src.textSizeTablet,
		[`is-size-${src.textSizeDesktop}-desktop`]: src.textSizeDesktop,
		[`is-size-${src.textSizeWidescreen}-widescreen`]: src.textSizeWidescreen,
		[`is-size-${src.textSizeFullhd}-fullhd`]: src.textSizeFullhd,

		[`has-text-${src.textAlign}`]: src.textAlign,
		[`has-text-${src.textAlignMobile}-mobile`]: src.textAlignMobile,
		[`has-text-${src.textAlignTouch}-touch`]: src.textAlignTouch,
		[`has-text-${src.textAlignTabletOnly}-tablet-only`]: src.textAlignTabletOnly,
		[`has-text-${src.textAlignTablet}-tablet`]: src.textAlignTablet,
		[`has-text-${src.textAlignDesktopOnly}-desktop-only`]: src.textAlignDesktopOnly,
		[`has-text-${src.textAlignDesktop}-desktop`]: src.textAlignDesktop,
		[`has-text-${src.textAlignWidescreenOnly}-widescreen-only`]: src.textAlignWidescreenOnly,
		[`has-text-${src.textAlignWidescreen}-widescreen`]: src.textAlignWidescreen,
		[`has-text-${src.textAlignFullhd}-fullhd`]: src.textAlignFullhd,

		[`is-${src.textTransform}`]: src.textTransform,
		[`has-text-weight-${src.textWeight}`]: src.textWeight,
		[`is-family-${src.fontFamily}`]: src.fontFamily,

		[`is-${src.display}`]: src.display,
		[`is-${src.display}-mobile`]: src.displayMobile,
		[`is-${src.display}-tablet-only`]: src.displayTabletOnly,
		[`is-${src.display}-desktop-only`]: src.displayDesktopOnly,
		[`is-${src.display}-widescreen-only`]: src.displayWidescreenOnly,
		[`is-${src.display}-touch`]: src.displayTouch,
		[`is-${src.display}-tablet`]: src.displayTablet,
		[`is-${src.display}-desktop`]: src.displayDesktop,
		[`is-${src.display}-widescreen`]: src.displayWidescreen,
		[`is-${src.display}-fullhd`]: src.displayFullhd,

		[`is-${src.hidden}`]: src.hidden,
		[`is-${src.hidden}-mobile`]: src.hiddenMobile,
		[`is-${src.hidden}-tablet-only`]: src.hiddenTabletOnly,
		[`is-${src.hidden}-desktop-only`]: src.hiddenDesktopOnly,
		[`is-${src.hidden}-widescreen-only`]: src.hiddenWidescreenOnly,
		[`is-${src.hidden}-touch`]: src.hiddenTouch,
		[`is-${src.hidden}-tablet`]: src.hiddenTablet,
		[`is-${src.hidden}-desktop`]: src.hiddenDesktop,
		[`is-${src.hidden}-widescreen`]: src.hiddenWidescreen,
		[`is-${src.hidden}-fullhd`]: src.hiddenFullhd,

		'is-invisible': src.invisible,
		'is-sr-only': src.srOnly,

		'is-flex': src.flexDir || src.alignContent || src.alignItems || src.justifyContent,
		[`is-flex-direction-${src.flexDir}`]: src.flexDir,
		[`is-flex-wrap-${src.flexWrap}`]: src.flexWrap,
		[`is-justify-content-${src.justifyContent}`]: src.justifyContent,
		[`is-align-content-${src.alignContent}`]: src.alignContent,
		[`is-align-items-${src.alignItems}`]: src.alignItems,
		[`is-align-self-${src.alignSelf}`]: src.alignSelf,
		[`is-flex-grow-${src.flex || src.flexGrow}`]:
			src.flex != undefined || src.flexGrow != undefined,
		[`is-flex-shrink-${src.flex || src.flexShrink}`]:
			src.flex != undefined || src.flexShrink != undefined,

		'is-clearfix': src.clearfix,
		'is-pulled-left': src.pulledLeft,
		'is-pulled-right': src.pulledRight,
		'is-overlay': src.overlay,
		'is-clipped': src.clipped,
		'is-radiusless': src.radiusless,
		'is-shadowless': src.shadowless,
		'is-unselectable': src.unselectable,
		'is-clickable': src.clickable,
		'is-relative': src.relative,
	});
}

class BulmaHelpers {
	input({
		bulma,
		color,
		size,
		isRounded,
		isHovered,
		isFocused,
		isStatic,
	}: {
		bulma?: types.BulmaHelper;
		color?: types.Colors;
		size?: types.InputSize;
		isRounded?: boolean;
		isHovered?: boolean;
		isFocused?: boolean;
		isStatic?: boolean;
	}) {
		return bulmaClassnames(bulma, [
			'input',
			{
				[`is-${color}`]: color != undefined,
				[`is-${size}`]: size != undefined,
				'is-rounded': isRounded,
				'is-hovered': isHovered,
				'is-focused': isFocused,
				'is-static': isStatic,
			},
		]);
	}
	button({
		bulma,
		className,
		color,
		light,
		size,
		responsive,
		fullWidth,
		outlined,
		inverted,
		rounded,
		loading,
		isStatic,
	}: {
		bulma?: types.BulmaHelper;
		className?: ClsArgument;
		color?: types.ButtonColor;
		light?: boolean;
		size?: types.ButtonSize;
		responsive?: boolean;
		fullWidth?: boolean;
		outlined?: boolean;
		inverted?: boolean;
		rounded?: boolean;
		loading?: boolean;
		isStatic?: boolean;
	}) {
		return bulmaClassnames(bulma, [
			'button',
			className,
			{
				[`is-${color}`]: color,
				'is-light': light,
				[`is-${size}`]: size,
				'is-responsive': responsive,
				'is-fullwidth': fullWidth,
				'is-outlined': outlined,
				'is-inverted': inverted,
				'is-rounded': rounded,
				'is-loading': loading,
				'is-static': isStatic,
			},
		]);
	}
	selectContainer({
		bulma,
		isMultiple,
		isRounded,
		color,
		size,
	}: {
		bulma?: types.BulmaHelper;
		isMultiple?: boolean;
		isRounded?: boolean;
		color?: types.Colors;
		size?: types.InputSize;
	}): string {
		return bulmaClassnames(bulma, [
			'select',
			{
				'is-multiple': isMultiple,
				[`is-${color}`]: color != undefined,
				[`is-${size}`]: size != undefined,
				'is-rounded': isRounded,
			},
		]);
	}
	select({
		bulma,
		isHovered,
		isFocused,
	}: {
		bulma?: types.BulmaHelper;
		isHovered?: boolean;
		isFocused?: boolean;
	}): string {
		return classnames({
			'is-hovered': isHovered,
			'is-focused': isFocused,
		});
	}
	textarea({
		bulma,
		color,
		size,
		isFocused,
		isHovered,
		isRounded,
		isStatic,
		hasFixedSize,
	}: {
		bulma?: types.BulmaHelper;
		color?: types.Colors;
		size?: types.InputSize;
		isRounded?: boolean;
		isHovered?: boolean;
		isFocused?: boolean;
		isStatic?: boolean;
		hasFixedSize?: boolean;
	}) {
		return bulmaClassnames(bulma, [
			'textarea',
			{
				[`is-${color}`]: color != undefined,
				[`is-${size}`]: size != undefined,
				'is-rounded': isRounded,
				'is-hovered': isHovered,
				'is-focused': isFocused,
				'is-static': isStatic,
				'has-fixed-size': hasFixedSize,
			},
		]);
	}
}

export const bulmaHelpers = new BulmaHelpers();
