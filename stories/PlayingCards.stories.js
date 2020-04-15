
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PlayingCards from '../src/PlayingCards';

export default {
  title: 'PlayingCards',
  component: PlayingCards,
};

export const Primary = () => <PlayingCards color="primary" />;
export const Secondary = () => <PlayingCards color="secondary" />;
export const Color = () => <PlayingCards color={color('color', '#00FF00')} />;
    