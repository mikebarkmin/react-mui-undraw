
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DevFocus from '../src/DevFocus';

export default {
  title: 'DevFocus',
  component: DevFocus,
};

export const Primary = () => <DevFocus color="primary" />;
export const Secondary = () => <DevFocus color="secondary" />;
export const Color = () => <DevFocus color={color('color', '#00FF00')} />;
    