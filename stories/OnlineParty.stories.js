
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineParty from '../src/OnlineParty';

export default {
  title: 'OnlineParty',
  component: OnlineParty,
};

export const Primary = () => <OnlineParty color="primary" />;
export const Secondary = () => <OnlineParty color="secondary" />;
export const Color = () => <OnlineParty color={color('color', '#00FF00')} />;
    