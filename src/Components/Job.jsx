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
    <section className="container mx-auto flex justify-between">
      <div className="flex gap-3 items-center p-3">
        <div>
          <img src={imageSrc} alt="" />
        </div>
        <div className="grid gap-1">
          <div className="flex gap-3">
            <strong className="text-teal-500 text-sm">{company}</strong>
            <div className="flex gap-1">
              {newnew && <New />}
              {featured && <Featured />}
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-xl">{position}</h2>
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
      <div className="flex gap-2 items-center px-4">
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
