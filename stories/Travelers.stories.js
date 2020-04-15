
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Travelers from '../src/Travelers';

export default {
  title: 'Travelers',
  component: Travelers,
};

export const Primary = () => <Travelers color="primary" />;
export const Secondary = () => <Travelers color="secondary" />;
export const Color = () => <Travelers color={color('color', '#00FF00')} />;
    