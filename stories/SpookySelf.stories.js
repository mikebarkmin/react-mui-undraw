
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SpookySelf from '../src/SpookySelf';

export default {
  title: 'SpookySelf',
  component: SpookySelf,
};

export const Primary = () => <SpookySelf color="primary" />;
export const Secondary = () => <SpookySelf color="secondary" />;
export const Color = () => <SpookySelf color={color('color', '#00FF00')} />;
    