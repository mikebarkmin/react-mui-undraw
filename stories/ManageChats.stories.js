
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ManageChats from '../src/ManageChats';

export default {
  title: 'ManageChats',
  component: ManageChats,
};

export const Primary = () => <ManageChats color="primary" />;
export const Secondary = () => <ManageChats color="secondary" />;
export const Color = () => <ManageChats color={color('color', '#00FF00')} />;
    