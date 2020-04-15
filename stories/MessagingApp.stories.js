
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MessagingApp from '../src/MessagingApp';

export default {
  title: 'MessagingApp',
  component: MessagingApp,
};

export const Primary = () => <MessagingApp color="primary" />;
export const Secondary = () => <MessagingApp color="secondary" />;
export const Color = () => <MessagingApp color={color('color', '#00FF00')} />;
    