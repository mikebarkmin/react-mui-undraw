
import React from 'react';
import { color } from '@storybook/addon-knobs';
import EditPhoto from '../src/EditPhoto';

export default {
  title: 'EditPhoto',
  component: EditPhoto,
};

export const Primary = () => <EditPhoto color="primary" />;
export const Secondary = () => <EditPhoto color="secondary" />;
export const Color = () => <EditPhoto color={color('color', '#00FF00')} />;
    