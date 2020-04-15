
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Followers from '../src/Followers';

export default {
  title: 'Followers',
  component: Followers,
};

export const Primary = () => <Followers color="primary" />;
export const Secondary = () => <Followers color="secondary" />;
export const Color = () => <Followers color={color('color', '#00FF00')} />;
    