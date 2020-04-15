
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Destinations from '../src/Destinations';

export default {
  title: 'Destinations',
  component: Destinations,
};

export const Primary = () => <Destinations color="primary" />;
export const Secondary = () => <Destinations color="secondary" />;
export const Color = () => <Destinations color={color('color', '#00FF00')} />;
    