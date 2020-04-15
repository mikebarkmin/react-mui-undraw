
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TeddyBear from '../src/TeddyBear';

export default {
  title: 'TeddyBear',
  component: TeddyBear,
};

export const Primary = () => <TeddyBear color="primary" />;
export const Secondary = () => <TeddyBear color="secondary" />;
export const Color = () => <TeddyBear color={color('color', '#00FF00')} />;
    