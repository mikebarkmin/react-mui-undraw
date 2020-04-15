
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialBio from '../src/SocialBio';

export default {
  title: 'SocialBio',
  component: SocialBio,
};

export const Primary = () => <SocialBio color="primary" />;
export const Secondary = () => <SocialBio color="secondary" />;
export const Color = () => <SocialBio color={color('color', '#00FF00')} />;
    