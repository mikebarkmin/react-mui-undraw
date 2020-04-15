
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ArtThinking from '../src/ArtThinking';

export default {
  title: 'ArtThinking',
  component: ArtThinking,
};

export const Primary = () => <ArtThinking color="primary" />;
export const Secondary = () => <ArtThinking color="secondary" />;
export const Color = () => <ArtThinking color={color('color', '#00FF00')} />;
    