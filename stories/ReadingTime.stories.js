
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ReadingTime from '../src/ReadingTime';

export default {
  title: 'ReadingTime',
  component: ReadingTime,
};

export const Primary = () => <ReadingTime color="primary" />;
export const Secondary = () => <ReadingTime color="secondary" />;
export const Color = () => <ReadingTime color={color('color', '#00FF00')} />;
    