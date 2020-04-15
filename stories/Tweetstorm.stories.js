
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Tweetstorm from '../src/Tweetstorm';

export default {
  title: 'Tweetstorm',
  component: Tweetstorm,
};

export const Primary = () => <Tweetstorm color="primary" />;
export const Secondary = () => <Tweetstorm color="secondary" />;
export const Color = () => <Tweetstorm color={color('color', '#00FF00')} />;
    