
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MayTheForce from '../src/MayTheForce';

export default {
  title: 'MayTheForce',
  component: MayTheForce,
};

export const Primary = () => <MayTheForce color="primary" />;
export const Secondary = () => <MayTheForce color="secondary" />;
export const Color = () => <MayTheForce color={color('color', '#00FF00')} />;
    