
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WindyDay from '../src/WindyDay';

export default {
  title: 'WindyDay',
  component: WindyDay,
};

export const Primary = () => <WindyDay color="primary" />;
export const Secondary = () => <WindyDay color="secondary" />;
export const Color = () => <WindyDay color={color('color', '#00FF00')} />;
    