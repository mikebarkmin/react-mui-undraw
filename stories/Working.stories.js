
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Working from '../src/Working';

export default {
  title: 'Working',
  component: Working,
};

export const Primary = () => <Working color="primary" />;
export const Secondary = () => <Working color="secondary" />;
export const Color = () => <Working color={color('color', '#00FF00')} />;
    