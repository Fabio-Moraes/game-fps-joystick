import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './Page/Home';
//import { Filter } from './Page/Filter';
//import { Support } from './Page/Support';


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/cadastros" element={<Filter />} /> */}
      {/* <Route path="/suporte" element={<Support />} /> */}
      <Route path="*" element={<h1>Pagina em Desenvolvimento!</h1>} />
    </Routes>
  );
}