// @flow

import { ColorSchemeRegistry, schemeColor } from '../../../base/color-scheme';
import { BoxModel, ColorPalette, createStyleSheet } from '../../../base/styles';

import { HANGUP_BUTTON_SIZE } from '../../constants';

// Toolbox, toolbar:

/**
 * The style of toolbar buttons.
 */
const toolbarButton = {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: ColorPalette.white,
    flex: 0,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',

    // XXX We probably tested BoxModel.margin and discovered it to be too small
    // for our taste.
    marginHorizontal: 7,
    width: 45
};

/**
 * The icon style of the toolbar buttons.
 */
const toolbarButtonIcon = {
    alignSelf: 'center',
    color: ColorPalette.white,
    fontSize: 22
};

/**
 * The style of toolbar buttons which display white icons.
 */
const whiteToolbarButton = {
    ...toolbarButton,
    backgroundColor: schemeColor('buttonToggled')
};

/**
 * The icon style of toolbar buttons which display white icons.
 */
const whiteToolbarButtonIcon = {
    ...toolbarButtonIcon,
    color: ColorPalette.white
};

/**
 * The Toolbox and toolbar related styles.
 */
const styles = createStyleSheet({

    /**
     * The style of the toolbar.
     */
    toolbar: {
        alignItems: 'center',
        flexDirection: 'row',
        flexGrow: 0,
        justifyContent: 'center',
        marginBottom: BoxModel.margin / 2,
        paddingHorizontal: BoxModel.margin
    },

    /**
     * The style of the root/top-level {@link Container} of {@link Toolbox}.
     */
    toolbox: {
        flexDirection: 'column',
        flexGrow: 0
    }
});

export default styles;

/**
 * Color schemed styles for the @{Toolbox} component.
 */
ColorSchemeRegistry.register('Toolbox', {
    /**
     * Styles for buttons in the toolbar.
     */
    buttonStyles: {
        iconStyle: toolbarButtonIcon,
        style: toolbarButton
    },

    /**
     * Overrides to the standard styles that we apply to the chat button, as
     * that behaves slightly differently to other buttons.
     */
    chatButtonOverride: {
        toggled: {
            backgroundColor: ColorPalette.blue
        }
    },

    hangupButtonStyles: {
        iconStyle: whiteToolbarButtonIcon,
        style: {
            ...toolbarButton,
            backgroundColor: schemeColor('hangup'),
            borderRadius: HANGUP_BUTTON_SIZE / 2,
            height: HANGUP_BUTTON_SIZE,
            width: HANGUP_BUTTON_SIZE,
            borderWidth: 0
        },
        underlayColor: ColorPalette.buttonUnderlay
    },

    /**
     * Styles for toggled buttons in the toolbar.
     */
    toggledButtonStyles: {
        iconStyle: whiteToolbarButtonIcon,
        style: {
            ...whiteToolbarButton,
            borderColor: schemeColor('buttonToggledBorder'),
            borderWidth: 1
        }
    }
});
