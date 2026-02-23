import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import useApplicationApi from '../../api/useApplicationApi';

// import { myApplicationsPromise } from '../../api/applicationsApi';

const MyApplications = () => {

    const { user } = useAuth();
    const { myApplicationsPromise } = useApplicationApi();

    // console.log('token in the context', user.accessToken);

    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={'loading your applications'}>
                <ApplicationList
                    myApplicationsPromise={myApplicationsPromise(user.email)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;