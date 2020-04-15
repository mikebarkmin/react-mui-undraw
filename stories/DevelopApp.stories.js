
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DevelopApp from '../src/DevelopApp';

export default {
  title: 'DevelopApp',
  component: DevelopApp,
};

export const Primary = () => <DevelopApp color="primary" />;
export const Secondary = () => <DevelopApp color="secondary" />;
export const Color = () => <DevelopApp color={color('color', '#00FF00')} />;
    