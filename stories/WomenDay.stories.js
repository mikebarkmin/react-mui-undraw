
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WomenDay from '../src/WomenDay';

export default {
  title: 'WomenDay',
  component: WomenDay,
};

export const Primary = () => <WomenDay color="primary" />;
export const Secondary = () => <WomenDay color="secondary" />;
export const Color = () => <WomenDay color={color('color', '#00FF00')} />;
    