
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialStrategy from '../src/SocialStrategy';

export default {
  title: 'SocialStrategy',
  component: SocialStrategy,
};

export const Primary = () => <SocialStrategy color="primary" />;
export const Secondary = () => <SocialStrategy color="secondary" />;
export const Color = () => <SocialStrategy color={color('color', '#00FF00')} />;
    