
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Awards from '../src/Awards';

export default {
  title: 'Awards',
  component: Awards,
};

export const Primary = () => <Awards color="primary" />;
export const Secondary = () => <Awards color="secondary" />;
export const Color = () => <Awards color={color('color', '#00FF00')} />;
    