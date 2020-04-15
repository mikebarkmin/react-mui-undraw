
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MemoryStorage from '../src/MemoryStorage';

export default {
  title: 'MemoryStorage',
  component: MemoryStorage,
};

export const Primary = () => <MemoryStorage color="primary" />;
export const Secondary = () => <MemoryStorage color="secondary" />;
export const Color = () => <MemoryStorage color={color('color', '#00FF00')} />;
    