
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TailwindCss from '../src/TailwindCss';

export default {
  title: 'TailwindCss',
  component: TailwindCss,
};

export const Primary = () => <TailwindCss color="primary" />;
export const Secondary = () => <TailwindCss color="secondary" />;
export const Color = () => <TailwindCss color={color('color', '#00FF00')} />;
    