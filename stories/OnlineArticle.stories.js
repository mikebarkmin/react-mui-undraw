
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineArticle from '../src/OnlineArticle';

export default {
  title: 'OnlineArticle',
  component: OnlineArticle,
};

export const Primary = () => <OnlineArticle color="primary" />;
export const Secondary = () => <OnlineArticle color="secondary" />;
export const Color = () => <OnlineArticle color={color('color', '#00FF00')} />;
    