
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Balloons from '../src/Balloons';

export default {
  title: 'Balloons',
  component: Balloons,
};

export const Primary = () => <Balloons color="primary" />;
export const Secondary = () => <Balloons color="secondary" />;
export const Color = () => <Balloons color={color('color', '#00FF00')} />;
    