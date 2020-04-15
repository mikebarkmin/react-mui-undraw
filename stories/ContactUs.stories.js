
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ContactUs from '../src/ContactUs';

export default {
  title: 'ContactUs',
  component: ContactUs,
};

export const Primary = () => <ContactUs color="primary" />;
export const Secondary = () => <ContactUs color="secondary" />;
export const Color = () => <ContactUs color={color('color', '#00FF00')} />;
    