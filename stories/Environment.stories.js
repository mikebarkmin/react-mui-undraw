
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Environment from '../src/Environment';

export default {
  title: 'Environment',
  component: Environment,
};

export const Primary = () => <Environment color="primary" />;
export const Secondary = () => <Environment color="secondary" />;
export const Color = () => <Environment color={color('color', '#00FF00')} />;
    