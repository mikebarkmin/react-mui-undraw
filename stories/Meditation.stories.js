
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Meditation from '../src/Meditation';

export default {
  title: 'Meditation',
  component: Meditation,
};

export const Primary = () => <Meditation color="primary" />;
export const Secondary = () => <Meditation color="secondary" />;
export const Color = () => <Meditation color={color('color', '#00FF00')} />;
    