
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Neighbors from '../src/Neighbors';

export default {
  title: 'Neighbors',
  component: Neighbors,
};

export const Primary = () => <Neighbors color="primary" />;
export const Secondary = () => <Neighbors color="secondary" />;
export const Color = () => <Neighbors color={color('color', '#00FF00')} />;
    