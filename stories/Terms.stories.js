
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Terms from '../src/Terms';

export default {
  title: 'Terms',
  component: Terms,
};

export const Primary = () => <Terms color="primary" />;
export const Secondary = () => <Terms color="secondary" />;
export const Color = () => <Terms color={color('color', '#00FF00')} />;
    