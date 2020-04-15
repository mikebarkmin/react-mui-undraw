
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Teaching from '../src/Teaching';

export default {
  title: 'Teaching',
  component: Teaching,
};

export const Primary = () => <Teaching color="primary" />;
export const Secondary = () => <Teaching color="secondary" />;
export const Color = () => <Teaching color={color('color', '#00FF00')} />;
    