
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Netflix from '../src/Netflix';

export default {
  title: 'Netflix',
  component: Netflix,
};

export const Primary = () => <Netflix color="primary" />;
export const Secondary = () => <Netflix color="secondary" />;
export const Color = () => <Netflix color={color('color', '#00FF00')} />;
    