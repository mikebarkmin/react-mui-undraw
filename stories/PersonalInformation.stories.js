
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PersonalInformation from '../src/PersonalInformation';

export default {
  title: 'PersonalInformation',
  component: PersonalInformation,
};

export const Primary = () => <PersonalInformation color="primary" />;
export const Secondary = () => <PersonalInformation color="secondary" />;
export const Color = () => <PersonalInformation color={color('color', '#00FF00')} />;
    