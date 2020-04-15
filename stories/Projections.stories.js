
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Projections from '../src/Projections';

export default {
  title: 'Projections',
  component: Projections,
};

export const Primary = () => <Projections color="primary" />;
export const Secondary = () => <Projections color="secondary" />;
export const Color = () => <Projections color={color('color', '#00FF00')} />;
    