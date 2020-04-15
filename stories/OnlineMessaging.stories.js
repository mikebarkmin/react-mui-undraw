
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineMessaging from '../src/OnlineMessaging';

export default {
  title: 'OnlineMessaging',
  component: OnlineMessaging,
};

export const Primary = () => <OnlineMessaging color="primary" />;
export const Secondary = () => <OnlineMessaging color="secondary" />;
export const Color = () => <OnlineMessaging color={color('color', '#00FF00')} />;
    