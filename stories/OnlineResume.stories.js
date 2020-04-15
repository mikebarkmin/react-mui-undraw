
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineResume from '../src/OnlineResume';

export default {
  title: 'OnlineResume',
  component: OnlineResume,
};

export const Primary = () => <OnlineResume color="primary" />;
export const Secondary = () => <OnlineResume color="secondary" />;
export const Color = () => <OnlineResume color={color('color', '#00FF00')} />;
    