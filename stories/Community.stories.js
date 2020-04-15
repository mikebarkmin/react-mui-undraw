
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Community from '../src/Community';

export default {
  title: 'Community',
  component: Community,
};

export const Primary = () => <Community color="primary" />;
export const Secondary = () => <Community color="secondary" />;
export const Color = () => <Community color={color('color', '#00FF00')} />;
    