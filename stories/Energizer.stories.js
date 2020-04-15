
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Energizer from '../src/Energizer';

export default {
  title: 'Energizer',
  component: Energizer,
};

export const Primary = () => <Energizer color="primary" />;
export const Secondary = () => <Energizer color="secondary" />;
export const Color = () => <Energizer color={color('color', '#00FF00')} />;
    