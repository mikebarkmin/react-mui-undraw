
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Joyride from '../src/Joyride';

export default {
  title: 'Joyride',
  component: Joyride,
};

export const Primary = () => <Joyride color="primary" />;
export const Secondary = () => <Joyride color="secondary" />;
export const Color = () => <Joyride color={color('color', '#00FF00')} />;
    