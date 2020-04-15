
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FrozenFigure from '../src/FrozenFigure';

export default {
  title: 'FrozenFigure',
  component: FrozenFigure,
};

export const Primary = () => <FrozenFigure color="primary" />;
export const Secondary = () => <FrozenFigure color="secondary" />;
export const Color = () => <FrozenFigure color={color('color', '#00FF00')} />;
    