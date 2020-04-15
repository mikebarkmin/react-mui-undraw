
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Outdoors from '../src/Outdoors';

export default {
  title: 'Outdoors',
  component: Outdoors,
};

export const Primary = () => <Outdoors color="primary" />;
export const Secondary = () => <Outdoors color="secondary" />;
export const Color = () => <Outdoors color={color('color', '#00FF00')} />;
    