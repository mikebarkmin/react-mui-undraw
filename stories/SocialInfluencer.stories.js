
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialInfluencer from '../src/SocialInfluencer';

export default {
  title: 'SocialInfluencer',
  component: SocialInfluencer,
};

export const Primary = () => <SocialInfluencer color="primary" />;
export const Secondary = () => <SocialInfluencer color="secondary" />;
export const Color = () => <SocialInfluencer color={color('color', '#00FF00')} />;
    