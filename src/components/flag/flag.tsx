import { Genders, genders } from "../../constants/genders";
import { articles } from "../../constants/articles";
import { FC, useState } from "react";
import styles from "./flag.module.css";
import { usePrevious } from "../../hooks/usePrevious";

interface FlagProps {
  wordGender: Genders;
}

const Flag: FC<FlagProps> = (props) => {
  const { wordGender } = props;
  const [isFinished, setIsFinished] = useState([false, false, false]);

  // Not in a useEffect function because React Hook "usePrevious" cannot be called inside a callback
  const previousWordGender: Genders = usePrevious(wordGender);

  const getStartStyle = (gender: Genders): string => {
    switch (gender) {
      case Genders.Feminine:
        return styles.feminineStart;

      case Genders.Neuter:
        return styles.neuterStart;

      default:
        return "";
    }
  };

  return (
    <>
      {genders.map((gender: Genders, i: number) => (
        <div
          key={gender}
          className={`h-[33.34vh] opacity-50 flex flex-col justify-center ${gender.toLowerCase()} ${
            !isFinished[i] ? styles.start + " " + getStartStyle(gender) : ""
          } ${gender === wordGender ? styles.highlighted : ""} ${
            gender === previousWordGender && wordGender !== previousWordGender
              ? styles.unhighlighted
              : ""
          }`}
          onAnimationEnd={() =>
            setIsFinished(
              isFinished.map((element, index) => (i === index ? true : element))
            )
          }
        >
          <span className='text-white text-center text-9xl'>{articles[i]}</span>
        </div>
      ))}
    </>
  );
};

export default Flag;
