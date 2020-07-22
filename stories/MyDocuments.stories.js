
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MyDocuments from '../src/MyDocuments';

export default {
  title: 'MyDocuments',
  component: MyDocuments,
};

export const Primary = () => <MyDocuments color="primary" />;
export const Secondary = () => <MyDocuments color="secondary" />;
export const Color = () => <MyDocuments color={color('color', '#00FF00')} />;
    