
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Opened from '../src/Opened';

export default {
  title: 'Opened',
  component: Opened,
};

export const Primary = () => <Opened color="primary" />;
export const Secondary = () => <Opened color="secondary" />;
export const Color = () => <Opened color={color('color', '#00FF00')} />;
    