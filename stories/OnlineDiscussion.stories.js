
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineDiscussion from '../src/OnlineDiscussion';

export default {
  title: 'OnlineDiscussion',
  component: OnlineDiscussion,
};

export const Primary = () => <OnlineDiscussion color="primary" />;
export const Secondary = () => <OnlineDiscussion color="secondary" />;
export const Color = () => <OnlineDiscussion color={color('color', '#00FF00')} />;
    