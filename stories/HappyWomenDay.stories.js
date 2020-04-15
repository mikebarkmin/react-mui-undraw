
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HappyWomenDay from '../src/HappyWomenDay';

export default {
  title: 'HappyWomenDay',
  component: HappyWomenDay,
};

export const Primary = () => <HappyWomenDay color="primary" />;
export const Secondary = () => <HappyWomenDay color="secondary" />;
export const Color = () => <HappyWomenDay color={color('color', '#00FF00')} />;
    