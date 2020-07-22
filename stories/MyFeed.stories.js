
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MyFeed from '../src/MyFeed';

export default {
  title: 'MyFeed',
  component: MyFeed,
};

export const Primary = () => <MyFeed color="primary" />;
export const Secondary = () => <MyFeed color="secondary" />;
export const Color = () => <MyFeed color={color('color', '#00FF00')} />;
    