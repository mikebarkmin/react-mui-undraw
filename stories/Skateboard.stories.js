
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Skateboard from '../src/Skateboard';

export default {
  title: 'Skateboard',
  component: Skateboard,
};

export const Primary = () => <Skateboard color="primary" />;
export const Secondary = () => <Skateboard color="secondary" />;
export const Color = () => <Skateboard color={color('color', '#00FF00')} />;
    