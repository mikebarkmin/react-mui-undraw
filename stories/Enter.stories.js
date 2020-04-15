
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Enter from '../src/Enter';

export default {
  title: 'Enter',
  component: Enter,
};

export const Primary = () => <Enter color="primary" />;
export const Secondary = () => <Enter color="secondary" />;
export const Color = () => <Enter color={color('color', '#00FF00')} />;
    