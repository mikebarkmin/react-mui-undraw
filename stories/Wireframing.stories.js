
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Wireframing from '../src/Wireframing';

export default {
  title: 'Wireframing',
  component: Wireframing,
};

export const Primary = () => <Wireframing color="primary" />;
export const Secondary = () => <Wireframing color="secondary" />;
export const Color = () => <Wireframing color={color('color', '#00FF00')} />;
    