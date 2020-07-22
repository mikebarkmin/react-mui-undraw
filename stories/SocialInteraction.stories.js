
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialInteraction from '../src/SocialInteraction';

export default {
  title: 'SocialInteraction',
  component: SocialInteraction,
};

export const Primary = () => <SocialInteraction color="primary" />;
export const Secondary = () => <SocialInteraction color="secondary" />;
export const Color = () => <SocialInteraction color={color('color', '#00FF00')} />;
    