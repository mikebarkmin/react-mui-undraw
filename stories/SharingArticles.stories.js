
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SharingArticles from '../src/SharingArticles';

export default {
  title: 'SharingArticles',
  component: SharingArticles,
};

export const Primary = () => <SharingArticles color="primary" />;
export const Secondary = () => <SharingArticles color="secondary" />;
export const Color = () => <SharingArticles color={color('color', '#00FF00')} />;
    