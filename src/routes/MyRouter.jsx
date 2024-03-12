import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from '../components/layouts/AuthLayout';
import GuestLayout from '../components/layouts/GuestLayout';
import Home from '../views/Home';
import AllJobs from '../views/AllJobs';
import PostJob from '../views/PostJob';
import NotFound from '../views/NotFound';
import Profile from '../views/Profile';
import Contact from '../views/Contact';
import Signin from '../views/Signin';
import Signup from '../views/Signup';

const MyRouter = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route index path='/' element={<Home />} />
        <Route path='/findjobs' element={<AllJobs />} />
        <Route path='/postjob' element={<PostJob />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
      <Route element={<GuestLayout />}>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default MyRouter;
