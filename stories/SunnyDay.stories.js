
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SunnyDay from '../src/SunnyDay';

export default {
  title: 'SunnyDay',
  component: SunnyDay,
};

export const Primary = () => <SunnyDay color="primary" />;
export const Secondary = () => <SunnyDay color="secondary" />;
export const Color = () => <SunnyDay color={color('color', '#00FF00')} />;
    