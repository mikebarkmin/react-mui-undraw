
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TrueLove from '../src/TrueLove';

export default {
  title: 'TrueLove',
  component: TrueLove,
};

export const Primary = () => <TrueLove color="primary" />;
export const Secondary = () => <TrueLove color="secondary" />;
export const Color = () => <TrueLove color={color('color', '#00FF00')} />;
    