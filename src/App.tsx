
import { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'swiper/css/grid';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import './App.css';
import AppBarSection from './sections/AppBarSection';
import Context from './sections/Context';
import Documentaries from './sections/Documentaries';
import Evolution from './sections/Evolution';
import Footer from './sections/Footer';
import Logistics from './sections/Logistics';
import Opening from './sections/Opening';
import Result from './sections/Result';
import Strategy from './sections/Strategy';
import Heroes from './sections/Heroes';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    initChatbot(script)
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const initChatbot = (script: any) => {
    // script.src = '';
    script.src = 'https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/0.1.0-beta.5/libs/oversea/index.js';
    script.async = true;

    script.onload = () => {
      if ((window as any).CozeWebSDK) {
        new (window as any).CozeWebSDK.WebChatClient({
          config: {
            bot_id: '7425198163742572552',
          },
          componentProps: {
            title: 'Coze',
            layout: 'pc',
          },
        });
      }
    };

    document.body.appendChild(script);
  }
  return (
    <ParallaxProvider>
      <AppBarSection />
      {/* trang dau */}
      <Opening />
      {/* boi canh */}
      <Context />
      {/* dien bien chinh */}
      <Evolution />
      {/* cac cuoc khoi nghia tren toan quoc */}
      <Strategy />
      {/* kq */}
      <Result />
      {/* ynghia */}
      <Logistics />


      <Heroes/>
      
      
      <Documentaries />
      <Footer />
    </ParallaxProvider>

  )
}

export default App
