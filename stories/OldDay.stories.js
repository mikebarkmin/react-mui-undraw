
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OldDay from '../src/OldDay';

export default {
  title: 'OldDay',
  component: OldDay,
};

export const Primary = () => <OldDay color="primary" />;
export const Secondary = () => <OldDay color="secondary" />;
export const Color = () => <OldDay color={color('color', '#00FF00')} />;
    