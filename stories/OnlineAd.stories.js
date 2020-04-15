
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineAd from '../src/OnlineAd';

export default {
  title: 'OnlineAd',
  component: OnlineAd,
};

export const Primary = () => <OnlineAd color="primary" />;
export const Secondary = () => <OnlineAd color="secondary" />;
export const Color = () => <OnlineAd color={color('color', '#00FF00')} />;
    