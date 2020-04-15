
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Collecting from '../src/Collecting';

export default {
  title: 'Collecting',
  component: Collecting,
};

export const Primary = () => <Collecting color="primary" />;
export const Secondary = () => <Collecting color="secondary" />;
export const Color = () => <Collecting color={color('color', '#00FF00')} />;
    