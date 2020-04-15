
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Steps from '../src/Steps';

export default {
  title: 'Steps',
  component: Steps,
};

export const Primary = () => <Steps color="primary" />;
export const Secondary = () => <Steps color="secondary" />;
export const Color = () => <Steps color={color('color', '#00FF00')} />;
    