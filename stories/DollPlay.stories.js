
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DollPlay from '../src/DollPlay';

export default {
  title: 'DollPlay',
  component: DollPlay,
};

export const Primary = () => <DollPlay color="primary" />;
export const Secondary = () => <DollPlay color="secondary" />;
export const Color = () => <DollPlay color={color('color', '#00FF00')} />;
    