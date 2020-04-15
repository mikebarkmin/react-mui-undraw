
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialThinking from '../src/SocialThinking';

export default {
  title: 'SocialThinking',
  component: SocialThinking,
};

export const Primary = () => <SocialThinking color="primary" />;
export const Secondary = () => <SocialThinking color="secondary" />;
export const Color = () => <SocialThinking color={color('color', '#00FF00')} />;
    