
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Firmware from '../src/Firmware';

export default {
  title: 'Firmware',
  component: Firmware,
};

export const Primary = () => <Firmware color="primary" />;
export const Secondary = () => <Firmware color="secondary" />;
export const Color = () => <Firmware color={color('color', '#00FF00')} />;
    