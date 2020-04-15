
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Biking from '../src/Biking';

export default {
  title: 'Biking',
  component: Biking,
};

export const Primary = () => <Biking color="primary" />;
export const Secondary = () => <Biking color="secondary" />;
export const Color = () => <Biking color={color('color', '#00FF00')} />;
    