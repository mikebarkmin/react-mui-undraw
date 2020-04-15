
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Pilates from '../src/Pilates';

export default {
  title: 'Pilates',
  component: Pilates,
};

export const Primary = () => <Pilates color="primary" />;
export const Secondary = () => <Pilates color="secondary" />;
export const Color = () => <Pilates color={color('color', '#00FF00')} />;
    