
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ChoreList from '../src/ChoreList';

export default {
  title: 'ChoreList',
  component: ChoreList,
};

export const Primary = () => <ChoreList color="primary" />;
export const Secondary = () => <ChoreList color="secondary" />;
export const Color = () => <ChoreList color={color('color', '#00FF00')} />;
    