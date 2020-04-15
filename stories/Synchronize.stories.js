
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Synchronize from '../src/Synchronize';

export default {
  title: 'Synchronize',
  component: Synchronize,
};

export const Primary = () => <Synchronize color="primary" />;
export const Secondary = () => <Synchronize color="secondary" />;
export const Color = () => <Synchronize color={color('color', '#00FF00')} />;
    