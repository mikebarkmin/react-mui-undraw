
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ContentStructure from '../src/ContentStructure';

export default {
  title: 'ContentStructure',
  component: ContentStructure,
};

export const Primary = () => <ContentStructure color="primary" />;
export const Secondary = () => <ContentStructure color="secondary" />;
export const Color = () => <ContentStructure color={color('color', '#00FF00')} />;
    