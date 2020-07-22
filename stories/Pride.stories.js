
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Pride from '../src/Pride';

export default {
  title: 'Pride',
  component: Pride,
};

export const Primary = () => <Pride color="primary" />;
export const Secondary = () => <Pride color="secondary" />;
export const Color = () => <Pride color={color('color', '#00FF00')} />;
    