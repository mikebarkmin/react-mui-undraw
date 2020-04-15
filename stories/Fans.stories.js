
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Fans from '../src/Fans';

export default {
  title: 'Fans',
  component: Fans,
};

export const Primary = () => <Fans color="primary" />;
export const Secondary = () => <Fans color="secondary" />;
export const Color = () => <Fans color={color('color', '#00FF00')} />;
    