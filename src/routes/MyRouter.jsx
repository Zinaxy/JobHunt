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
import SingleJob from '../views/SingleJob';
import SearchResults from '../views/SearchResults';
import DefaultLayout from '../components/layouts/DefaultLayout';
import Server500 from '../views/500';
import Cantdates from '../views/Cantdates';
import CandidateProfile from '../views/CandidateProfile';

const MyRouter = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index path='/' element={<Home />} />
        <Route path='/findjobs' element={<AllJobs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/viewjob/:id' element={<SingleJob />} />
        <Route path='search-results' element={<SearchResults />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path='/postjob' element={<PostJob />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cantidates' element={<Cantdates />} />
        <Route
          path='/view-cantidate-profile/:id'
          element={<CandidateProfile />}
        />
      </Route>

      <Route element={<GuestLayout />}>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Route>
      <Route path='*' element={<NotFound />} />
      <Route path='/server500' element={<Server500 />} />
    </Routes>
  );
};

export default MyRouter;
