
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Nextjs from '../src/Nextjs';

export default {
  title: 'Nextjs',
  component: Nextjs,
};

export const Primary = () => <Nextjs color="primary" />;
export const Secondary = () => <Nextjs color="secondary" />;
export const Color = () => <Nextjs color={color('color', '#00FF00')} />;
    