
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ModernArt from '../src/ModernArt';

export default {
  title: 'ModernArt',
  component: ModernArt,
};

export const Primary = () => <ModernArt color="primary" />;
export const Secondary = () => <ModernArt color="secondary" />;
export const Color = () => <ModernArt color={color('color', '#00FF00')} />;
    