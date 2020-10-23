import React from 'react';
import './index.css';
import Navbar from '../Navbar'
import Main from '../Main'
import GlobalFonts from '../../fonts/fonts';



const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const MobileComponent = () => <p>"Hmmm... Why is your screen so small?"</p>;
const DesktopComponent = () => <p>"Wow, your screen is big!"</p>;

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 620;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function App() {
  return (
    <ViewportProvider>
      <GlobalFonts />
      <Navbar />
      <Main />
    </ViewportProvider>
  );
}
