
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FittingPieces from '../src/FittingPieces';

export default {
  title: 'FittingPieces',
  component: FittingPieces,
};

export const Primary = () => <FittingPieces color="primary" />;
export const Secondary = () => <FittingPieces color="secondary" />;
export const Color = () => <FittingPieces color={color('color', '#00FF00')} />;
    