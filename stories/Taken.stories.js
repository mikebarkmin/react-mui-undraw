
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Taken from '../src/Taken';

export default {
  title: 'Taken',
  component: Taken,
};

export const Primary = () => <Taken color="primary" />;
export const Secondary = () => <Taken color="secondary" />;
export const Color = () => <Taken color={color('color', '#00FF00')} />;
    