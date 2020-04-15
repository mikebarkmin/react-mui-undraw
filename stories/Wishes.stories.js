
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Wishes from '../src/Wishes';

export default {
  title: 'Wishes',
  component: Wishes,
};

export const Primary = () => <Wishes color="primary" />;
export const Secondary = () => <Wishes color="secondary" />;
export const Color = () => <Wishes color={color('color', '#00FF00')} />;
    