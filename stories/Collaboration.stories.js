
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Collaboration from '../src/Collaboration';

export default {
  title: 'Collaboration',
  component: Collaboration,
};

export const Primary = () => <Collaboration color="primary" />;
export const Secondary = () => <Collaboration color="secondary" />;
export const Color = () => <Collaboration color={color('color', '#00FF00')} />;
    