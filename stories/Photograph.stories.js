
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Photograph from '../src/Photograph';

export default {
  title: 'Photograph',
  component: Photograph,
};

export const Primary = () => <Photograph color="primary" />;
export const Secondary = () => <Photograph color="secondary" />;
export const Color = () => <Photograph color={color('color', '#00FF00')} />;
    