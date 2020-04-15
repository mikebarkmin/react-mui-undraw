
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LightTheFire from '../src/LightTheFire';

export default {
  title: 'LightTheFire',
  component: LightTheFire,
};

export const Primary = () => <LightTheFire color="primary" />;
export const Secondary = () => <LightTheFire color="secondary" />;
export const Color = () => <LightTheFire color={color('color', '#00FF00')} />;
    