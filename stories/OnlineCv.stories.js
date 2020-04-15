
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineCv from '../src/OnlineCv';

export default {
  title: 'OnlineCv',
  component: OnlineCv,
};

export const Primary = () => <OnlineCv color="primary" />;
export const Secondary = () => <OnlineCv color="secondary" />;
export const Color = () => <OnlineCv color={color('color', '#00FF00')} />;
    