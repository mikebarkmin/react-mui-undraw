
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AddUser from '../src/AddUser';

export default {
  title: 'AddUser',
  component: AddUser,
};

export const Primary = () => <AddUser color="primary" />;
export const Secondary = () => <AddUser color="secondary" />;
export const Color = () => <AddUser color={color('color', '#00FF00')} />;
    