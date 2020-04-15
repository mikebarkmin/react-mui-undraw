
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Undraw1000 from '../src/Undraw1000';

export default {
  title: 'Undraw1000',
  component: Undraw1000,
};

export const Primary = () => <Undraw1000 color="primary" />;
export const Secondary = () => <Undraw1000 color="secondary" />;
export const Color = () => <Undraw1000 color={color('color', '#00FF00')} />;
    