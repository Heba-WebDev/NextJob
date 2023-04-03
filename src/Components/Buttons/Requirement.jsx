/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
export default function Requirement({ requirement }) {
  return (
    <button disabled className="bg-gray-50 text-teal-500 py-1 px-2 font-medium">
      {requirement}
    </button>
  );
}
