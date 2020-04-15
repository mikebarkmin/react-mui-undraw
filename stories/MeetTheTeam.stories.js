
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MeetTheTeam from '../src/MeetTheTeam';

export default {
  title: 'MeetTheTeam',
  component: MeetTheTeam,
};

export const Primary = () => <MeetTheTeam color="primary" />;
export const Secondary = () => <MeetTheTeam color="secondary" />;
export const Color = () => <MeetTheTeam color={color('color', '#00FF00')} />;
    