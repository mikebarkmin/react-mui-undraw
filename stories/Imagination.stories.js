
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Imagination from '../src/Imagination';

export default {
  title: 'Imagination',
  component: Imagination,
};

export const Primary = () => <Imagination color="primary" />;
export const Secondary = () => <Imagination color="secondary" />;
export const Color = () => <Imagination color={color('color', '#00FF00')} />;
    