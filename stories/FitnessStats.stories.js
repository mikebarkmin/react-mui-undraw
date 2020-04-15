
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FitnessStats from '../src/FitnessStats';

export default {
  title: 'FitnessStats',
  component: FitnessStats,
};

export const Primary = () => <FitnessStats color="primary" />;
export const Secondary = () => <FitnessStats color="secondary" />;
export const Color = () => <FitnessStats color={color('color', '#00FF00')} />;
    