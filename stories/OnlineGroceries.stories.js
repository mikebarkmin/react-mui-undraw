
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineGroceries from '../src/OnlineGroceries';

export default {
  title: 'OnlineGroceries',
  component: OnlineGroceries,
};

export const Primary = () => <OnlineGroceries color="primary" />;
export const Secondary = () => <OnlineGroceries color="secondary" />;
export const Color = () => <OnlineGroceries color={color('color', '#00FF00')} />;
    