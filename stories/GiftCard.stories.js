
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GiftCard from '../src/GiftCard';

export default {
  title: 'GiftCard',
  component: GiftCard,
};

export const Primary = () => <GiftCard color="primary" />;
export const Secondary = () => <GiftCard color="secondary" />;
export const Color = () => <GiftCard color={color('color', '#00FF00')} />;
    