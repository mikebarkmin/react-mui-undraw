
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineBanking from '../src/OnlineBanking';

export default {
  title: 'OnlineBanking',
  component: OnlineBanking,
};

export const Primary = () => <OnlineBanking color="primary" />;
export const Secondary = () => <OnlineBanking color="secondary" />;
export const Color = () => <OnlineBanking color={color('color', '#00FF00')} />;
    