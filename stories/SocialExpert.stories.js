
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialExpert from '../src/SocialExpert';

export default {
  title: 'SocialExpert',
  component: SocialExpert,
};

export const Primary = () => <SocialExpert color="primary" />;
export const Secondary = () => <SocialExpert color="secondary" />;
export const Color = () => <SocialExpert color={color('color', '#00FF00')} />;
    