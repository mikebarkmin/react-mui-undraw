
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Responsiveness from '../src/Responsiveness';

export default {
  title: 'Responsiveness',
  component: Responsiveness,
};

export const Primary = () => <Responsiveness color="primary" />;
export const Secondary = () => <Responsiveness color="secondary" />;
export const Color = () => <Responsiveness color={color('color', '#00FF00')} />;
    