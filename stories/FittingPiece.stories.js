
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FittingPiece from '../src/FittingPiece';

export default {
  title: 'FittingPiece',
  component: FittingPiece,
};

export const Primary = () => <FittingPiece color="primary" />;
export const Secondary = () => <FittingPiece color="secondary" />;
export const Color = () => <FittingPiece color={color('color', '#00FF00')} />;
    