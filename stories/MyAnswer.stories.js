
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MyAnswer from '../src/MyAnswer';

export default {
  title: 'MyAnswer',
  component: MyAnswer,
};

export const Primary = () => <MyAnswer color="primary" />;
export const Secondary = () => <MyAnswer color="secondary" />;
export const Color = () => <MyAnswer color={color('color', '#00FF00')} />;
    