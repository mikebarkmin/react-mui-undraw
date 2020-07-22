
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MonsterArtist from '../src/MonsterArtist';

export default {
  title: 'MonsterArtist',
  component: MonsterArtist,
};

export const Primary = () => <MonsterArtist color="primary" />;
export const Secondary = () => <MonsterArtist color="secondary" />;
export const Color = () => <MonsterArtist color={color('color', '#00FF00')} />;
    