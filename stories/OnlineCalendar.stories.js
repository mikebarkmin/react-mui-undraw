
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineCalendar from '../src/OnlineCalendar';

export default {
  title: 'OnlineCalendar',
  component: OnlineCalendar,
};

export const Primary = () => <OnlineCalendar color="primary" />;
export const Secondary = () => <OnlineCalendar color="secondary" />;
export const Color = () => <OnlineCalendar color={color('color', '#00FF00')} />;
    