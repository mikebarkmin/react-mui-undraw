
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Popular from '../src/Popular';

export default {
  title: 'Popular',
  component: Popular,
};

export const Primary = () => <Popular color="primary" />;
export const Secondary = () => <Popular color="secondary" />;
export const Color = () => <Popular color={color('color', '#00FF00')} />;
    