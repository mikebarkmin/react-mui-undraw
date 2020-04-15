
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FishBowl from '../src/FishBowl';

export default {
  title: 'FishBowl',
  component: FishBowl,
};

export const Primary = () => <FishBowl color="primary" />;
export const Secondary = () => <FishBowl color="secondary" />;
export const Color = () => <FishBowl color={color('color', '#00FF00')} />;
    