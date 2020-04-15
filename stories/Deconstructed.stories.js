
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Deconstructed from '../src/Deconstructed';

export default {
  title: 'Deconstructed',
  component: Deconstructed,
};

export const Primary = () => <Deconstructed color="primary" />;
export const Secondary = () => <Deconstructed color="secondary" />;
export const Color = () => <Deconstructed color={color('color', '#00FF00')} />;
    