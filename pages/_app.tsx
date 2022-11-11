import { NextPage } from 'next';
import { AppProps } from 'next/app';

import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: ( page: JSX.Element ) => JSX.Element;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout ) {
  // Si existe la función getLayout aplica al componente que se está
  // renderizando,si no existe devuelve la pagina normal.
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
