
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Diary from '../src/Diary';

export default {
  title: 'Diary',
  component: Diary,
};

export const Primary = () => <Diary color="primary" />;
export const Secondary = () => <Diary color="secondary" />;
export const Color = () => <Diary color={color('color', '#00FF00')} />;
    