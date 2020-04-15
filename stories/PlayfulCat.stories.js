
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PlayfulCat from '../src/PlayfulCat';

export default {
  title: 'PlayfulCat',
  component: PlayfulCat,
};

export const Primary = () => <PlayfulCat color="primary" />;
export const Secondary = () => <PlayfulCat color="secondary" />;
export const Color = () => <PlayfulCat color={color('color', '#00FF00')} />;
    