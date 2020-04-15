
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialMedia from '../src/SocialMedia';

export default {
  title: 'SocialMedia',
  component: SocialMedia,
};

export const Primary = () => <SocialMedia color="primary" />;
export const Secondary = () => <SocialMedia color="secondary" />;
export const Color = () => <SocialMedia color={color('color', '#00FF00')} />;
    