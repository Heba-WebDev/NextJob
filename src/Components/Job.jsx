/* eslint-disable react/prop-types */
import Featured from './Buttons/Featured';
import New from './Buttons/New';
import Requirement from './Buttons/Requirement';

export default function Job({
  company,
  logo,
  newnew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) {
  const imageSrc = `src/assets/images/${logo}`;
  return (
    <section className="container mx-auto flex flex-col lg:flex-row justify-between">
      <div className="relative flex flex-col lg:flex-row gap-3 md:col-span-1 lg:items-center py-3 lg:p-3">
        <img
          className=" w-14 self-start lg:self-auto absolute lg:relative w-14 lg:w-auto top-[-28%] lg:top-0"
          src={imageSrc}
          alt=""
        />
        <div className="grid gap-1 lg:gap-0 lg:w-auto py-2 lg:py-0">
          <div className="flex gap-3">
            <strong className="text-teal-500 text-sm">{company}</strong>
            <div className="flex gap-1">
              {newnew && <New />}
              {featured && <Featured />}
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-xl py-1 lg:py-0">{position}</h2>
          </div>
          <div className="flex gap-2 text-gray-400 items-center text-sm">
            <span>{postedAt}</span>
            <span>.</span>
            <span>{contract}</span>
            <span>.</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
      <hr className="md:hidden py-2" />
      <div className="flex flex-wrap gap-2 items-center md:px-4">
        <Requirement requirement={role} />
        <span>{level}</span>
        {languages &&
          languages.map((requirement) => {
            return <Requirement key={requirement} requirement={requirement} />;
          })}
        {tools &&
          tools.map((requirement) => {
            return <Requirement key={requirement} requirement={requirement} />;
          })}
      </div>
    </section>
  );
}
