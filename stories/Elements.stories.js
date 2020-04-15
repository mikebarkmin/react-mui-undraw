
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Elements from '../src/Elements';

export default {
  title: 'Elements',
  component: Elements,
};

export const Primary = () => <Elements color="primary" />;
export const Secondary = () => <Elements color="secondary" />;
export const Color = () => <Elements color={color('color', '#00FF00')} />;
    