
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ReadingList from '../src/ReadingList';

export default {
  title: 'ReadingList',
  component: ReadingList,
};

export const Primary = () => <ReadingList color="primary" />;
export const Secondary = () => <ReadingList color="secondary" />;
export const Color = () => <ReadingList color={color('color', '#00FF00')} />;
    