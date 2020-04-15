
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineEverywhere from '../src/OnlineEverywhere';

export default {
  title: 'OnlineEverywhere',
  component: OnlineEverywhere,
};

export const Primary = () => <OnlineEverywhere color="primary" />;
export const Secondary = () => <OnlineEverywhere color="secondary" />;
export const Color = () => <OnlineEverywhere color={color('color', '#00FF00')} />;
    