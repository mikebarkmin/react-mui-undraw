
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Moments from '../src/Moments';

export default {
  title: 'Moments',
  component: Moments,
};

export const Primary = () => <Moments color="primary" />;
export const Secondary = () => <Moments color="secondary" />;
export const Color = () => <Moments color={color('color', '#00FF00')} />;
    