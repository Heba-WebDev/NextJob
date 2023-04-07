// import { useEffect, useState } from 'react';
import data from '../data.json';
import Job from './Job';

export default function Jobs() {
  return (
    <div className="grid gap-8 md:gap-3 mt-6">
      {data.map((job) => {
        return (
          <div
            key={job.id}
            className="bg-white w-[95%] md:w-3/4 mx-auto p-2 border border-4 border-l-teal-500 border-r-0 border-t-0 border-b-0"
          >
            <Job
              logo={job.logo}
              title={job.title}
              company={job.company}
              newnew={job.new}
              featured={job.featured}
              position={job.position}
              role={job.role}
              postedAt={job.postedAt}
              contract={job.contract}
              location={job.location}
              languages={job.languages}
              tools={job.tools}
            />
          </div>
        );
      })}
    </div>
  );
}
