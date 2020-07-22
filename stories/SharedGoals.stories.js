
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SharedGoals from '../src/SharedGoals';

export default {
  title: 'SharedGoals',
  component: SharedGoals,
};

export const Primary = () => <SharedGoals color="primary" />;
export const Secondary = () => <SharedGoals color="secondary" />;
export const Color = () => <SharedGoals color={color('color', '#00FF00')} />;
    