
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Innovative from '../src/Innovative';

export default {
  title: 'Innovative',
  component: Innovative,
};

export const Primary = () => <Innovative color="primary" />;
export const Secondary = () => <Innovative color="secondary" />;
export const Color = () => <Innovative color={color('color', '#00FF00')} />;
    