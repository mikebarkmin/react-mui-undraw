
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ContentCreator from '../src/ContentCreator';

export default {
  title: 'ContentCreator',
  component: ContentCreator,
};

export const Primary = () => <ContentCreator color="primary" />;
export const Secondary = () => <ContentCreator color="secondary" />;
export const Color = () => <ContentCreator color={color('color', '#00FF00')} />;
    