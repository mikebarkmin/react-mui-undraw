
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialUpdate from '../src/SocialUpdate';

export default {
  title: 'SocialUpdate',
  component: SocialUpdate,
};

export const Primary = () => <SocialUpdate color="primary" />;
export const Secondary = () => <SocialUpdate color="secondary" />;
export const Color = () => <SocialUpdate color={color('color', '#00FF00')} />;
    