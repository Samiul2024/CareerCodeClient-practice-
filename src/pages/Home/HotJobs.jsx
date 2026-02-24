// import React , {use} from 'react';
// // import { use } from 'react';

// const HotJobs = ({ jobsPromise }) => {

//     const jobs = use(jobsPromise);   
/**
 * Didn't work in there ,says i can't use "use " here, it can be used in NExt.js app
 */

//     return (
//         <div>
//             {jobs.length}
//         </div>
//     );
// };

// export default HotJobs;



import { useEffect, useState } from "react";
import JobCard from "../Shared/jobCard";

const HotJobs = ({ jobsPromise }) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        jobsPromise.then(data => setJobs(data));
    }, [jobsPromise]);

    return (
        <div>
            <h2 className="text-4xl py-4 bg-amber-500 rounded-full text-center">Hot Jobs Of The Day</h2>
            <div className="grid gap-4 py-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">


                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>

        </div>
    );

};

export default HotJobs;
