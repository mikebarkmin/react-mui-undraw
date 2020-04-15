
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Fishing from '../src/Fishing';

export default {
  title: 'Fishing',
  component: Fishing,
};

export const Primary = () => <Fishing color="primary" />;
export const Secondary = () => <Fishing color="secondary" />;
export const Color = () => <Fishing color={color('color', '#00FF00')} />;
    