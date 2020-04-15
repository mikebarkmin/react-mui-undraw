
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineArticles from '../src/OnlineArticles';

export default {
  title: 'OnlineArticles',
  component: OnlineArticles,
};

export const Primary = () => <OnlineArticles color="primary" />;
export const Secondary = () => <OnlineArticles color="secondary" />;
export const Color = () => <OnlineArticles color={color('color', '#00FF00')} />;
    