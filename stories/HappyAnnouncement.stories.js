
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HappyAnnouncement from '../src/HappyAnnouncement';

export default {
  title: 'HappyAnnouncement',
  component: HappyAnnouncement,
};

export const Primary = () => <HappyAnnouncement color="primary" />;
export const Secondary = () => <HappyAnnouncement color="secondary" />;
export const Color = () => <HappyAnnouncement color={color('color', '#00FF00')} />;
    