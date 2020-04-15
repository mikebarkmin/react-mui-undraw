
import React from 'react';
import { color } from '@storybook/addon-knobs';
import News from '../src/News';

export default {
  title: 'News',
  component: News,
};

export const Primary = () => <News color="primary" />;
export const Secondary = () => <News color="secondary" />;
export const Color = () => <News color={color('color', '#00FF00')} />;
    