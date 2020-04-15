
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Confirmation from '../src/Confirmation';

export default {
  title: 'Confirmation',
  component: Confirmation,
};

export const Primary = () => <Confirmation color="primary" />;
export const Secondary = () => <Confirmation color="secondary" />;
export const Color = () => <Confirmation color={color('color', '#00FF00')} />;
    