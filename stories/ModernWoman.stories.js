
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ModernWoman from '../src/ModernWoman';

export default {
  title: 'ModernWoman',
  component: ModernWoman,
};

export const Primary = () => <ModernWoman color="primary" />;
export const Secondary = () => <ModernWoman color="secondary" />;
export const Color = () => <ModernWoman color={color('color', '#00FF00')} />;
    