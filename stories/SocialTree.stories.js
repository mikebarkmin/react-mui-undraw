
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialTree from '../src/SocialTree';

export default {
  title: 'SocialTree',
  component: SocialTree,
};

export const Primary = () => <SocialTree color="primary" />;
export const Secondary = () => <SocialTree color="secondary" />;
export const Color = () => <SocialTree color={color('color', '#00FF00')} />;
    