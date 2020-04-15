
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineMedia from '../src/OnlineMedia';

export default {
  title: 'OnlineMedia',
  component: OnlineMedia,
};

export const Primary = () => <OnlineMedia color="primary" />;
export const Secondary = () => <OnlineMedia color="secondary" />;
export const Color = () => <OnlineMedia color={color('color', '#00FF00')} />;
    