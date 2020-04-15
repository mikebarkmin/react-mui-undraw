
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LandingPage from '../src/LandingPage';

export default {
  title: 'LandingPage',
  component: LandingPage,
};

export const Primary = () => <LandingPage color="primary" />;
export const Secondary = () => <LandingPage color="secondary" />;
export const Color = () => <LandingPage color={color('color', '#00FF00')} />;
    