
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialIdeas from '../src/SocialIdeas';

export default {
  title: 'SocialIdeas',
  component: SocialIdeas,
};

export const Primary = () => <SocialIdeas color="primary" />;
export const Secondary = () => <SocialIdeas color="secondary" />;
export const Color = () => <SocialIdeas color={color('color', '#00FF00')} />;
    