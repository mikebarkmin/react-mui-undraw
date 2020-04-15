
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WordOfMouth from '../src/WordOfMouth';

export default {
  title: 'WordOfMouth',
  component: WordOfMouth,
};

export const Primary = () => <WordOfMouth color="primary" />;
export const Secondary = () => <WordOfMouth color="secondary" />;
export const Color = () => <WordOfMouth color={color('color', '#00FF00')} />;
    