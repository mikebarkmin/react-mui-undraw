
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileWeb from '../src/MobileWeb';

export default {
  title: 'MobileWeb',
  component: MobileWeb,
};

export const Primary = () => <MobileWeb color="primary" />;
export const Secondary = () => <MobileWeb color="secondary" />;
export const Color = () => <MobileWeb color={color('color', '#00FF00')} />;
    