
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Newsletter from '../src/Newsletter';

export default {
  title: 'Newsletter',
  component: Newsletter,
};

export const Primary = () => <Newsletter color="primary" />;
export const Secondary = () => <Newsletter color="secondary" />;
export const Color = () => <Newsletter color={color('color', '#00FF00')} />;
    