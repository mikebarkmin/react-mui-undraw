
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GiftBox from '../src/GiftBox';

export default {
  title: 'GiftBox',
  component: GiftBox,
};

export const Primary = () => <GiftBox color="primary" />;
export const Secondary = () => <GiftBox color="secondary" />;
export const Color = () => <GiftBox color={color('color', '#00FF00')} />;
    