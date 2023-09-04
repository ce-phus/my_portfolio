import { useEffect, useState } from 'react';

const Skill = ({ skillName, percentage }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (offset < percentage) {
        setOffset(offset + 1);
      }
    }, 20); // Adjust animation speed as needed

    return () => {
      clearInterval(interval);
    };
  }, [offset, percentage]);

  return (
    <div className=" flex flex-col justify-between dark:text-light">
      <p className="text-xl font-semibold mb-2">{skillName}</p>
      <div className='relative mx-5 '>
      <svg
        width="100"
        height="100"
        className="relative"
      >
        <circle
          cx="50%"
          cy="50%"
          r="40%"
          fill="transparent"
          strokeWidth="8"
          stroke="#ee7600"
          strokeDasharray="251.2"
          strokeDashoffset={251.2 - (251.2 * offset) / 100}
        />
        <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="20"
            fill="#4A90E2"
          >
            {percentage}%
          </text>
      </svg>
      </div>
      <p className="font-medium mt-5">{percentage}%</p>
    </div>
  );
};

export default Skill;
