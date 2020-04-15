
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineVideo from '../src/OnlineVideo';

export default {
  title: 'OnlineVideo',
  component: OnlineVideo,
};

export const Primary = () => <OnlineVideo color="primary" />;
export const Secondary = () => <OnlineVideo color="secondary" />;
export const Color = () => <OnlineVideo color={color('color', '#00FF00')} />;
    