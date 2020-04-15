
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OrganizePhotos from '../src/OrganizePhotos';

export default {
  title: 'OrganizePhotos',
  component: OrganizePhotos,
};

export const Primary = () => <OrganizePhotos color="primary" />;
export const Secondary = () => <OrganizePhotos color="secondary" />;
export const Color = () => <OrganizePhotos color={color('color', '#00FF00')} />;
    