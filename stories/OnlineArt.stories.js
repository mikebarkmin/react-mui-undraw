
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineArt from '../src/OnlineArt';

export default {
  title: 'OnlineArt',
  component: OnlineArt,
};

export const Primary = () => <OnlineArt color="primary" />;
export const Secondary = () => <OnlineArt color="secondary" />;
export const Color = () => <OnlineArt color={color('color', '#00FF00')} />;
    