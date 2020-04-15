
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Safe from '../src/Safe';

export default {
  title: 'Safe',
  component: Safe,
};

export const Primary = () => <Safe color="primary" />;
export const Secondary = () => <Safe color="secondary" />;
export const Color = () => <Safe color={color('color', '#00FF00')} />;
    