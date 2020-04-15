
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TheWorldIsMine from '../src/TheWorldIsMine';

export default {
  title: 'TheWorldIsMine',
  component: TheWorldIsMine,
};

export const Primary = () => <TheWorldIsMine color="primary" />;
export const Secondary = () => <TheWorldIsMine color="secondary" />;
export const Color = () => <TheWorldIsMine color={color('color', '#00FF00')} />;
    