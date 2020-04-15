
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialLife from '../src/SocialLife';

export default {
  title: 'SocialLife',
  component: SocialLife,
};

export const Primary = () => <SocialLife color="primary" />;
export const Secondary = () => <SocialLife color="secondary" />;
export const Color = () => <SocialLife color={color('color', '#00FF00')} />;
    