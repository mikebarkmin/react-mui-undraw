
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Professor from '../src/Professor';

export default {
  title: 'Professor',
  component: Professor,
};

export const Primary = () => <Professor color="primary" />;
export const Secondary = () => <Professor color="secondary" />;
export const Color = () => <Professor color={color('color', '#00FF00')} />;
    