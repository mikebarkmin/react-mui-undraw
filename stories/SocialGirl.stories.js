
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialGirl from '../src/SocialGirl';

export default {
  title: 'SocialGirl',
  component: SocialGirl,
};

export const Primary = () => <SocialGirl color="primary" />;
export const Secondary = () => <SocialGirl color="secondary" />;
export const Color = () => <SocialGirl color={color('color', '#00FF00')} />;
    