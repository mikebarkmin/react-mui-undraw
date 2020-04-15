
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialShare from '../src/SocialShare';

export default {
  title: 'SocialShare',
  component: SocialShare,
};

export const Primary = () => <SocialShare color="primary" />;
export const Secondary = () => <SocialShare color="secondary" />;
export const Color = () => <SocialShare color={color('color', '#00FF00')} />;
    