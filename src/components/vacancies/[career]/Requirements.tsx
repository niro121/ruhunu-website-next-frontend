import React from "react";

const CareerRequirements: React.FC = () => {
  return (
    <div className="px-8 md:px-32 pt-10 pb-20 text-black">
      <h3 className="text-[35px] font-medium mb-4">Entry Requirements</h3>

      <h4 className="text-[25px] font-bold mb-4">
        Ideal Candidate Should Possess
      </h4>

      <ul className="list-disc ml-4 marker:text-[#18CE67] marker:text-2xl space-y-3">
        <li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdamad,
            adipisci fugiat maiores earum.
          </p>
        </li>

        <li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdamad.
          </p>
        </li>

        <li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdamad,
            adipisci.
          </p>
        </li>

        <li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdamad,
            adipisci fugiat maiores.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default CareerRequirements;