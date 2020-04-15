
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Skateboarding from '../src/Skateboarding';

export default {
  title: 'Skateboarding',
  component: Skateboarding,
};

export const Primary = () => <Skateboarding color="primary" />;
export const Secondary = () => <Skateboarding color="secondary" />;
export const Color = () => <Skateboarding color={color('color', '#00FF00')} />;
    