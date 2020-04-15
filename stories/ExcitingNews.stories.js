
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ExcitingNews from '../src/ExcitingNews';

export default {
  title: 'ExcitingNews',
  component: ExcitingNews,
};

export const Primary = () => <ExcitingNews color="primary" />;
export const Secondary = () => <ExcitingNews color="secondary" />;
export const Color = () => <ExcitingNews color={color('color', '#00FF00')} />;
    