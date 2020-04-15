
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ArtLover from '../src/ArtLover';

export default {
  title: 'ArtLover',
  component: ArtLover,
};

export const Primary = () => <ArtLover color="primary" />;
export const Secondary = () => <ArtLover color="secondary" />;
export const Color = () => <ArtLover color={color('color', '#00FF00')} />;
    