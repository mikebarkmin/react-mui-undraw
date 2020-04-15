
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialNetworking from '../src/SocialNetworking';

export default {
  title: 'SocialNetworking',
  component: SocialNetworking,
};

export const Primary = () => <SocialNetworking color="primary" />;
export const Secondary = () => <SocialNetworking color="secondary" />;
export const Color = () => <SocialNetworking color={color('color', '#00FF00')} />;
    