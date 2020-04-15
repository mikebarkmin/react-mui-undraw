
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Collaborating from '../src/Collaborating';

export default {
  title: 'Collaborating',
  component: Collaborating,
};

export const Primary = () => <Collaborating color="primary" />;
export const Secondary = () => <Collaborating color="secondary" />;
export const Color = () => <Collaborating color={color('color', '#00FF00')} />;
    