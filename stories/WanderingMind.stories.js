
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WanderingMind from '../src/WanderingMind';

export default {
  title: 'WanderingMind',
  component: WanderingMind,
};

export const Primary = () => <WanderingMind color="primary" />;
export const Secondary = () => <WanderingMind color="secondary" />;
export const Color = () => <WanderingMind color={color('color', '#00FF00')} />;
    