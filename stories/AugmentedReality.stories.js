
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AugmentedReality from '../src/AugmentedReality';

export default {
  title: 'AugmentedReality',
  component: AugmentedReality,
};

export const Primary = () => <AugmentedReality color="primary" />;
export const Secondary = () => <AugmentedReality color="secondary" />;
export const Color = () => <AugmentedReality color={color('color', '#00FF00')} />;
    