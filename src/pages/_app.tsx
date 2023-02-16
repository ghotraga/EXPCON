import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  return <><Header /><Component {...pageProps} /><Footer /></>
}
