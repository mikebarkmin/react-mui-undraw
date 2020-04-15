
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialDistancing from '../src/SocialDistancing';

export default {
  title: 'SocialDistancing',
  component: SocialDistancing,
};

export const Primary = () => <SocialDistancing color="primary" />;
export const Secondary = () => <SocialDistancing color="secondary" />;
export const Color = () => <SocialDistancing color={color('color', '#00FF00')} />;
    