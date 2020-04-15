
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ModernDesign from '../src/ModernDesign';

export default {
  title: 'ModernDesign',
  component: ModernDesign,
};

export const Primary = () => <ModernDesign color="primary" />;
export const Secondary = () => <ModernDesign color="secondary" />;
export const Color = () => <ModernDesign color={color('color', '#00FF00')} />;
    