
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Composition from '../src/Composition';

export default {
  title: 'Composition',
  component: Composition,
};

export const Primary = () => <Composition color="primary" />;
export const Secondary = () => <Composition color="secondary" />;
export const Color = () => <Composition color={color('color', '#00FF00')} />;
    