
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Moving from '../src/Moving';

export default {
  title: 'Moving',
  component: Moving,
};

export const Primary = () => <Moving color="primary" />;
export const Secondary = () => <Moving color="secondary" />;
export const Color = () => <Moving color={color('color', '#00FF00')} />;
    