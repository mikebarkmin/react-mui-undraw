
import React from 'react';
import { color } from '@storybook/addon-knobs';
import NewMessage from '../src/NewMessage';

export default {
  title: 'NewMessage',
  component: NewMessage,
};

export const Primary = () => <NewMessage color="primary" />;
export const Secondary = () => <NewMessage color="secondary" />;
export const Color = () => <NewMessage color={color('color', '#00FF00')} />;
    