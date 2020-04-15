
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GoingUp from '../src/GoingUp';

export default {
  title: 'GoingUp',
  component: GoingUp,
};

export const Primary = () => <GoingUp color="primary" />;
export const Secondary = () => <GoingUp color="secondary" />;
export const Color = () => <GoingUp color={color('color', '#00FF00')} />;
    