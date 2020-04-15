
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BeTheHero from '../src/BeTheHero';

export default {
  title: 'BeTheHero',
  component: BeTheHero,
};

export const Primary = () => <BeTheHero color="primary" />;
export const Secondary = () => <BeTheHero color="secondary" />;
export const Color = () => <BeTheHero color={color('color', '#00FF00')} />;
    