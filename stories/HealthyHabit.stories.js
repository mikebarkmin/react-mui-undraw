
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HealthyHabit from '../src/HealthyHabit';

export default {
  title: 'HealthyHabit',
  component: HealthyHabit,
};

export const Primary = () => <HealthyHabit color="primary" />;
export const Secondary = () => <HealthyHabit color="secondary" />;
export const Color = () => <HealthyHabit color={color('color', '#00FF00')} />;
    