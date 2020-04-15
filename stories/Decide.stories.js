
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Decide from '../src/Decide';

export default {
  title: 'Decide',
  component: Decide,
};

export const Primary = () => <Decide color="primary" />;
export const Secondary = () => <Decide color="secondary" />;
export const Color = () => <Decide color={color('color', '#00FF00')} />;
    