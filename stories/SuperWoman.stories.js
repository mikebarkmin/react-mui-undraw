
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SuperWoman from '../src/SuperWoman';

export default {
  title: 'SuperWoman',
  component: SuperWoman,
};

export const Primary = () => <SuperWoman color="primary" />;
export const Secondary = () => <SuperWoman color="secondary" />;
export const Color = () => <SuperWoman color={color('color', '#00FF00')} />;
    