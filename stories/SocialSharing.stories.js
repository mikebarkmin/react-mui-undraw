
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialSharing from '../src/SocialSharing';

export default {
  title: 'SocialSharing',
  component: SocialSharing,
};

export const Primary = () => <SocialSharing color="primary" />;
export const Secondary = () => <SocialSharing color="secondary" />;
export const Color = () => <SocialSharing color={color('color', '#00FF00')} />;
    