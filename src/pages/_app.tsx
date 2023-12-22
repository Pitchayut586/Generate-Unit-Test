import Layout from '@/components/Layouts/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// export default function App({ Component, pageProps }: AppProps) {
//     return (
//         <Layout>
//             <Component {...pageProps} />
//         </Layout>
//     );
// }