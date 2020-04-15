
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlinePage from '../src/OnlinePage';

export default {
  title: 'OnlinePage',
  component: OnlinePage,
};

export const Primary = () => <OnlinePage color="primary" />;
export const Secondary = () => <OnlinePage color="secondary" />;
export const Color = () => <OnlinePage color={color('color', '#00FF00')} />;
    