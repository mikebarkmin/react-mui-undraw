
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Messenger from '../src/Messenger';

export default {
  title: 'Messenger',
  component: Messenger,
};

export const Primary = () => <Messenger color="primary" />;
export const Secondary = () => <Messenger color="secondary" />;
export const Color = () => <Messenger color={color('color', '#00FF00')} />;
    