
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ComingHome from '../src/ComingHome';

export default {
  title: 'ComingHome',
  component: ComingHome,
};

export const Primary = () => <ComingHome color="primary" />;
export const Secondary = () => <ComingHome color="secondary" />;
export const Color = () => <ComingHome color={color('color', '#00FF00')} />;
    