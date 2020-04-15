
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Friendship from '../src/Friendship';

export default {
  title: 'Friendship',
  component: Friendship,
};

export const Primary = () => <Friendship color="primary" />;
export const Secondary = () => <Friendship color="secondary" />;
export const Color = () => <Friendship color={color('color', '#00FF00')} />;
    