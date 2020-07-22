
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineConnection from '../src/OnlineConnection';

export default {
  title: 'OnlineConnection',
  component: OnlineConnection,
};

export const Primary = () => <OnlineConnection color="primary" />;
export const Secondary = () => <OnlineConnection color="secondary" />;
export const Color = () => <OnlineConnection color={color('color', '#00FF00')} />;
    