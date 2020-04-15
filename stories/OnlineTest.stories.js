
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineTest from '../src/OnlineTest';

export default {
  title: 'OnlineTest',
  component: OnlineTest,
};

export const Primary = () => <OnlineTest color="primary" />;
export const Secondary = () => <OnlineTest color="secondary" />;
export const Color = () => <OnlineTest color={color('color', '#00FF00')} />;
    