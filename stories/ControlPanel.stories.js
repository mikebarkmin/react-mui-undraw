
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ControlPanel from '../src/ControlPanel';

export default {
  title: 'ControlPanel',
  component: ControlPanel,
};

export const Primary = () => <ControlPanel color="primary" />;
export const Secondary = () => <ControlPanel color="secondary" />;
export const Color = () => <ControlPanel color={color('color', '#00FF00')} />;
    