
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TeamCollaboration from '../src/TeamCollaboration';

export default {
  title: 'TeamCollaboration',
  component: TeamCollaboration,
};

export const Primary = () => <TeamCollaboration color="primary" />;
export const Secondary = () => <TeamCollaboration color="secondary" />;
export const Color = () => <TeamCollaboration color={color('color', '#00FF00')} />;
    