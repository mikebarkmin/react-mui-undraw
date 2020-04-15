
import React from 'react';
import { color } from '@storybook/addon-knobs';
import EasterEggHunt from '../src/EasterEggHunt';

export default {
  title: 'EasterEggHunt',
  component: EasterEggHunt,
};

export const Primary = () => <EasterEggHunt color="primary" />;
export const Secondary = () => <EasterEggHunt color="secondary" />;
export const Color = () => <EasterEggHunt color={color('color', '#00FF00')} />;
    