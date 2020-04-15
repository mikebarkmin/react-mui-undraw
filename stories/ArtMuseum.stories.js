
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ArtMuseum from '../src/ArtMuseum';

export default {
  title: 'ArtMuseum',
  component: ArtMuseum,
};

export const Primary = () => <ArtMuseum color="primary" />;
export const Secondary = () => <ArtMuseum color="secondary" />;
export const Color = () => <ArtMuseum color={color('color', '#00FF00')} />;
    