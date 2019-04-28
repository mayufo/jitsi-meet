// 视频头部 - may

import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { getConferenceName } from '../../../base/conference';
import { connect } from '../../../base/redux';
import { isToolboxVisible } from '../../../toolbox';

import styles from './styles';

type Props = {

    /**
     * Name of the meeting we're currently in.
     */
    _meetingName: string,

    /**
     * True if the navigation bar should be visible.
     */
    _visible: boolean
};

/**
 * Implements a navigation bar component that is rendered on top of the
 * conference screen.
 */
class NavigationBar extends Component<Props> {
    /**
     * Implements {@Component#render}.
     *
     * @inheritdoc
     */
    render() {
        if (!this.props._visible) {
            return null;
        }

        return [
            <View
                key = { 2 }
                pointerEvents = 'box-none'
                style = { styles.navBarWrapper }>
                <Text
                    numberOfLines = { 1 }
                    style = { styles.setButton }>
                    12313232113123
                </Text>
            </View>
        ];
    }

}

/**
 * Maps part of the Redux store to the props of this component.
 *
 * @param {Object} state - The Redux state.
 * @returns {{
 *     _meetingName: string,
 *     _visible: boolean
 * }}
 */
function _mapStateToProps(state) {
    return {
        _meetingName: _.startCase(getConferenceName(state)),
        _visible: isToolboxVisible(state)
    };
}

export default connect(_mapStateToProps)(NavigationBar);
