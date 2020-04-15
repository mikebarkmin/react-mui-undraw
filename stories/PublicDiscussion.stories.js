
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PublicDiscussion from '../src/PublicDiscussion';

export default {
  title: 'PublicDiscussion',
  component: PublicDiscussion,
};

export const Primary = () => <PublicDiscussion color="primary" />;
export const Secondary = () => <PublicDiscussion color="secondary" />;
export const Color = () => <PublicDiscussion color={color('color', '#00FF00')} />;
    