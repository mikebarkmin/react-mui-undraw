
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineOrganizer from '../src/OnlineOrganizer';

export default {
  title: 'OnlineOrganizer',
  component: OnlineOrganizer,
};

export const Primary = () => <OnlineOrganizer color="primary" />;
export const Secondary = () => <OnlineOrganizer color="secondary" />;
export const Color = () => <OnlineOrganizer color={color('color', '#00FF00')} />;
    