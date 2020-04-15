
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FollowMeDrone from '../src/FollowMeDrone';

export default {
  title: 'FollowMeDrone',
  component: FollowMeDrone,
};

export const Primary = () => <FollowMeDrone color="primary" />;
export const Secondary = () => <FollowMeDrone color="secondary" />;
export const Color = () => <FollowMeDrone color={color('color', '#00FF00')} />;
    