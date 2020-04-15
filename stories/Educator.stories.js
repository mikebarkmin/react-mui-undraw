
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Educator from '../src/Educator';

export default {
  title: 'Educator',
  component: Educator,
};

export const Primary = () => <Educator color="primary" />;
export const Secondary = () => <Educator color="secondary" />;
export const Color = () => <Educator color={color('color', '#00FF00')} />;
    