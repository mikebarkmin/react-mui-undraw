
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileFeed from '../src/MobileFeed';

export default {
  title: 'MobileFeed',
  component: MobileFeed,
};

export const Primary = () => <MobileFeed color="primary" />;
export const Secondary = () => <MobileFeed color="secondary" />;
export const Color = () => <MobileFeed color={color('color', '#00FF00')} />;
    