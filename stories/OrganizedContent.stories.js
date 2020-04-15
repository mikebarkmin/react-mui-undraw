
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OrganizedContent from '../src/OrganizedContent';

export default {
  title: 'OrganizedContent',
  component: OrganizedContent,
};

export const Primary = () => <OrganizedContent color="primary" />;
export const Secondary = () => <OrganizedContent color="secondary" />;
export const Color = () => <OrganizedContent color={color('color', '#00FF00')} />;
    