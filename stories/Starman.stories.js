
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Starman from '../src/Starman';

export default {
  title: 'Starman',
  component: Starman,
};

export const Primary = () => <Starman color="primary" />;
export const Secondary = () => <Starman color="secondary" />;
export const Color = () => <Starman color={color('color', '#00FF00')} />;
    