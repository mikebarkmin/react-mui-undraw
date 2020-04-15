
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Workout from '../src/Workout';

export default {
  title: 'Workout',
  component: Workout,
};

export const Primary = () => <Workout color="primary" />;
export const Secondary = () => <Workout color="secondary" />;
export const Color = () => <Workout color={color('color', '#00FF00')} />;
    