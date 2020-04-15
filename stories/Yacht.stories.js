
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Yacht from '../src/Yacht';

export default {
  title: 'Yacht',
  component: Yacht,
};

export const Primary = () => <Yacht color="primary" />;
export const Secondary = () => <Yacht color="secondary" />;
export const Color = () => <Yacht color={color('color', '#00FF00')} />;
    