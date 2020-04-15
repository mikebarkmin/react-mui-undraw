
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ModernLife from '../src/ModernLife';

export default {
  title: 'ModernLife',
  component: ModernLife,
};

export const Primary = () => <ModernLife color="primary" />;
export const Secondary = () => <ModernLife color="secondary" />;
export const Color = () => <ModernLife color={color('color', '#00FF00')} />;
    