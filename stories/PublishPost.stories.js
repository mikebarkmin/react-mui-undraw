
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PublishPost from '../src/PublishPost';

export default {
  title: 'PublishPost',
  component: PublishPost,
};

export const Primary = () => <PublishPost color="primary" />;
export const Secondary = () => <PublishPost color="secondary" />;
export const Color = () => <PublishPost color={color('color', '#00FF00')} />;
    