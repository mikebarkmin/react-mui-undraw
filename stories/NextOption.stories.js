
import React from 'react';
import { color } from '@storybook/addon-knobs';
import NextOption from '../src/NextOption';

export default {
  title: 'NextOption',
  component: NextOption,
};

export const Primary = () => <NextOption color="primary" />;
export const Secondary = () => <NextOption color="secondary" />;
export const Color = () => <NextOption color={color('color', '#00FF00')} />;
    