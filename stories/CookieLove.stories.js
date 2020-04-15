
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CookieLove from '../src/CookieLove';

export default {
  title: 'CookieLove',
  component: CookieLove,
};

export const Primary = () => <CookieLove color="primary" />;
export const Secondary = () => <CookieLove color="secondary" />;
export const Color = () => <CookieLove color={color('color', '#00FF00')} />;
    