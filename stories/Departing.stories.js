
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Departing from '../src/Departing';

export default {
  title: 'Departing',
  component: Departing,
};

export const Primary = () => <Departing color="primary" />;
export const Secondary = () => <Departing color="secondary" />;
export const Color = () => <Departing color={color('color', '#00FF00')} />;
    