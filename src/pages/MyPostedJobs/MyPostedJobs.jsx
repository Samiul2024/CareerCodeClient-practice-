import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobLists from './JobLists';
import useJobApi from '../../api/useJobApi';
// import { jobsCreatedByPromise } from '../../api/jobsApi';

const MyPostedJobs = () => {

    const { user } = useAuth();
    const { jobsCreatedByPromise } = useJobApi();

    return (
        <div>
            <h2>My posted Jobs: </h2>
            <Suspense>
                <JobLists
                    jobsCreatedByPromise={jobsCreatedByPromise(user.email, user.accessToken)}
                ></JobLists>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;