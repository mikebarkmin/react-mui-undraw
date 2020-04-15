
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialGrowth from '../src/SocialGrowth';

export default {
  title: 'SocialGrowth',
  component: SocialGrowth,
};

export const Primary = () => <SocialGrowth color="primary" />;
export const Secondary = () => <SocialGrowth color="secondary" />;
export const Color = () => <SocialGrowth color={color('color', '#00FF00')} />;
    