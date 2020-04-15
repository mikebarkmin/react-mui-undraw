
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Presentation from '../src/Presentation';

export default {
  title: 'Presentation',
  component: Presentation,
};

export const Primary = () => <Presentation color="primary" />;
export const Secondary = () => <Presentation color="secondary" />;
export const Color = () => <Presentation color={color('color', '#00FF00')} />;
    