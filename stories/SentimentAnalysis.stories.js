
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SentimentAnalysis from '../src/SentimentAnalysis';

export default {
  title: 'SentimentAnalysis',
  component: SentimentAnalysis,
};

export const Primary = () => <SentimentAnalysis color="primary" />;
export const Secondary = () => <SentimentAnalysis color="secondary" />;
export const Color = () => <SentimentAnalysis color={color('color', '#00FF00')} />;
    