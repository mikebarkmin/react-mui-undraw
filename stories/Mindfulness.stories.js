
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Mindfulness from '../src/Mindfulness';

export default {
  title: 'Mindfulness',
  component: Mindfulness,
};

export const Primary = () => <Mindfulness color="primary" />;
export const Secondary = () => <Mindfulness color="secondary" />;
export const Color = () => <Mindfulness color={color('color', '#00FF00')} />;
    