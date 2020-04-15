
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Relaxation from '../src/Relaxation';

export default {
  title: 'Relaxation',
  component: Relaxation,
};

export const Primary = () => <Relaxation color="primary" />;
export const Secondary = () => <Relaxation color="secondary" />;
export const Color = () => <Relaxation color={color('color', '#00FF00')} />;
    