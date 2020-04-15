
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FitnessTracker from '../src/FitnessTracker';

export default {
  title: 'FitnessTracker',
  component: FitnessTracker,
};

export const Primary = () => <FitnessTracker color="primary" />;
export const Secondary = () => <FitnessTracker color="secondary" />;
export const Color = () => <FitnessTracker color={color('color', '#00FF00')} />;
    