
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Completed from '../src/Completed';

export default {
  title: 'Completed',
  component: Completed,
};

export const Primary = () => <Completed color="primary" />;
export const Secondary = () => <Completed color="secondary" />;
export const Color = () => <Completed color={color('color', '#00FF00')} />;
    