
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HomeSettings from '../src/HomeSettings';

export default {
  title: 'HomeSettings',
  component: HomeSettings,
};

export const Primary = () => <HomeSettings color="primary" />;
export const Secondary = () => <HomeSettings color="secondary" />;
export const Color = () => <HomeSettings color={color('color', '#00FF00')} />;
    