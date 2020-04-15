
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WindTurbine from '../src/WindTurbine';

export default {
  title: 'WindTurbine',
  component: WindTurbine,
};

export const Primary = () => <WindTurbine color="primary" />;
export const Secondary = () => <WindTurbine color="secondary" />;
export const Color = () => <WindTurbine color={color('color', '#00FF00')} />;
    