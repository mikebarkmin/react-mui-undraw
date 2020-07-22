
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineGallery from '../src/OnlineGallery';

export default {
  title: 'OnlineGallery',
  component: OnlineGallery,
};

export const Primary = () => <OnlineGallery color="primary" />;
export const Secondary = () => <OnlineGallery color="secondary" />;
export const Color = () => <OnlineGallery color={color('color', '#00FF00')} />;
    