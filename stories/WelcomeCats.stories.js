
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WelcomeCats from '../src/WelcomeCats';

export default {
  title: 'WelcomeCats',
  component: WelcomeCats,
};

export const Primary = () => <WelcomeCats color="primary" />;
export const Secondary = () => <WelcomeCats color="secondary" />;
export const Color = () => <WelcomeCats color={color('color', '#00FF00')} />;
    