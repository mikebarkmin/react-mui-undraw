
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PublishArticle from '../src/PublishArticle';

export default {
  title: 'PublishArticle',
  component: PublishArticle,
};

export const Primary = () => <PublishArticle color="primary" />;
export const Secondary = () => <PublishArticle color="secondary" />;
export const Color = () => <PublishArticle color={color('color', '#00FF00')} />;
    