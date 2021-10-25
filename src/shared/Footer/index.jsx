import React from 'react';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Typography color="text.secondary" align="center">
      {'Copyright © '}
      Bruno Asato
      {new Date().getFullYear()}.
    </Typography>
  );
};

export default Footer;
