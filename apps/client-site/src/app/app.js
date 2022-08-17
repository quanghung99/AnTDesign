import 'antd/dist/antd.css';
import './app.scss';

import { Route, Routes, Link } from 'react-router-dom';
import Homepage from './page/HomePage';
import Introduction from './page/Introduction';
import Posts from './page/Posts';
import Contact from './page/Contact';

// import { Helpers } from '@antdesign/helpers';
import { services } from '@an-tdesign/services';
import { ButtonCustom } from '@an-tdesign/ui-common';

export function App() {
  return (
    <>
      <div />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* END: routes */}
    </>
  );
}
export default App;
