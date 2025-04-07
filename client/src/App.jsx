import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';
import { LayoutLoader } from './components/layout/Loaders';

// this call dynamic import
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Chat = lazy(() => import('./pages/Chat'));
const Group = lazy(() => import('./pages/Group'));
const NotFound=lazy(() => import('./pages/NotFound'));

// if login

let user = true;

function App() {
  return (
    <BrowserRouter>
<Suspense fallback={<LayoutLoader/>}>
<Routes>
{/* becase of this all component will be protected */}
        <Route path="/" element={<ProtectRoute  user={user}/> } >
           <Route path="/" element={<Home />} />
        {/* dynamic routing */}
           <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Group />} />
         </Route>
         <Route path="/login" element={
          <ProtectRoute user={!user} redirect="/" >
            <Login />
          </ProtectRoute>
         } />



         {/* not found url */}
         <Route path="*" element={<NotFound/>} />

    </Routes>

    </Suspense>
    </BrowserRouter >
  )
}

export default App
