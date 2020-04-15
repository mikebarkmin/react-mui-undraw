
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Subway from '../src/Subway';

export default {
  title: 'Subway',
  component: Subway,
};

export const Primary = () => <Subway color="primary" />;
export const Secondary = () => <Subway color="secondary" />;
export const Color = () => <Subway color={color('color', '#00FF00')} />;
    