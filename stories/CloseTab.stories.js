
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CloseTab from '../src/CloseTab';

export default {
  title: 'CloseTab',
  component: CloseTab,
};

export const Primary = () => <CloseTab color="primary" />;
export const Secondary = () => <CloseTab color="secondary" />;
export const Color = () => <CloseTab color={color('color', '#00FF00')} />;
    