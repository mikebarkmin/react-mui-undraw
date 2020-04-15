
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineWishes from '../src/OnlineWishes';

export default {
  title: 'OnlineWishes',
  component: OnlineWishes,
};

export const Primary = () => <OnlineWishes color="primary" />;
export const Secondary = () => <OnlineWishes color="secondary" />;
export const Color = () => <OnlineWishes color={color('color', '#00FF00')} />;
    