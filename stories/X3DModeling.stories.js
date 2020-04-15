
import React from 'react';
import { color } from '@storybook/addon-knobs';
import X3DModeling from '../src/X3DModeling';

export default {
  title: 'X3DModeling',
  component: X3DModeling,
};

export const Primary = () => <X3DModeling color="primary" />;
export const Secondary = () => <X3DModeling color="secondary" />;
export const Color = () => <X3DModeling color={color('color', '#00FF00')} />;
    