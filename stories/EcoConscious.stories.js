
import React from 'react';
import { color } from '@storybook/addon-knobs';
import EcoConscious from '../src/EcoConscious';

export default {
  title: 'EcoConscious',
  component: EcoConscious,
};

export const Primary = () => <EcoConscious color="primary" />;
export const Secondary = () => <EcoConscious color="secondary" />;
export const Color = () => <EcoConscious color={color('color', '#00FF00')} />;
    