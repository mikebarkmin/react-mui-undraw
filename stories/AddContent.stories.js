
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AddContent from '../src/AddContent';

export default {
  title: 'AddContent',
  component: AddContent,
};

export const Primary = () => <AddContent color="primary" />;
export const Secondary = () => <AddContent color="secondary" />;
export const Color = () => <AddContent color={color('color', '#00FF00')} />;
    