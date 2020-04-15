
import React from 'react';
import { color } from '@storybook/addon-knobs';
import EverywhereTogether from '../src/EverywhereTogether';

export default {
  title: 'EverywhereTogether',
  component: EverywhereTogether,
};

export const Primary = () => <EverywhereTogether color="primary" />;
export const Secondary = () => <EverywhereTogether color="secondary" />;
export const Color = () => <EverywhereTogether color={color('color', '#00FF00')} />;
    