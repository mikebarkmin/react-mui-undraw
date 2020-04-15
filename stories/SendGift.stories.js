
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SendGift from '../src/SendGift';

export default {
  title: 'SendGift',
  component: SendGift,
};

export const Primary = () => <SendGift color="primary" />;
export const Secondary = () => <SendGift color="secondary" />;
export const Color = () => <SendGift color={color('color', '#00FF00')} />;
    