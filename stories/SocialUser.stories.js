
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialUser from '../src/SocialUser';

export default {
  title: 'SocialUser',
  component: SocialUser,
};

export const Primary = () => <SocialUser color="primary" />;
export const Secondary = () => <SocialUser color="secondary" />;
export const Color = () => <SocialUser color={color('color', '#00FF00')} />;
    