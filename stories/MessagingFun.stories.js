
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MessagingFun from '../src/MessagingFun';

export default {
  title: 'MessagingFun',
  component: MessagingFun,
};

export const Primary = () => <MessagingFun color="primary" />;
export const Secondary = () => <MessagingFun color="secondary" />;
export const Color = () => <MessagingFun color={color('color', '#00FF00')} />;
    