
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Ideas from '../src/Ideas';

export default {
  title: 'Ideas',
  component: Ideas,
};

export const Primary = () => <Ideas color="primary" />;
export const Secondary = () => <Ideas color="secondary" />;
export const Color = () => <Ideas color={color('color', '#00FF00')} />;
    