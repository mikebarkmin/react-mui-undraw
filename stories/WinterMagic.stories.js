
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WinterMagic from '../src/WinterMagic';

export default {
  title: 'WinterMagic',
  component: WinterMagic,
};

export const Primary = () => <WinterMagic color="primary" />;
export const Secondary = () => <WinterMagic color="secondary" />;
export const Color = () => <WinterMagic color={color('color', '#00FF00')} />;
    