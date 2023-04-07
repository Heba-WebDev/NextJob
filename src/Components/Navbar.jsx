// eslint-disable-next-line import/no-extraneous-dependencies
import { FcBriefcase } from 'react-icons/fc';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RxMagnifyingGlass } from 'react-icons/rx';

export default function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between py-6 px-2 md:px-0 font-medium">
      <div className="flex items-center gap-1">
        <FcBriefcase size="30" />
        <span className="font-bold text-teal-800 text-lg">Jobster</span>
      </div>
      <div className="flex items-center gap-3">
        <ul className="flex justify-between gap-3">
          <li>
            <a href="/Jobs">Jobs</a>
          </li>
          <li>
            <a href="/Employers"> Employers</a>
          </li>
          <li>
            <RxMagnifyingGlass size="25" />
          </li>
        </ul>
        <button type="button" className="py-1 px-3 text-white bg-teal-500">
          Post a job
        </button>
      </div>
    </nav>
  );
}
