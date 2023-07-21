import React, { FC, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Genders } from "../../constants/genders";
import { determineGender } from "../../helpers/genders";
import Loader from "../loader/loader";
import styles from "./inputModal.module.css";

interface InputModalProps {
  wordGender: Genders;
  setWordGender: React.Dispatch<React.SetStateAction<Genders>>;
}

const InputModal: FC<InputModalProps> = (props) => {
  const { wordGender, setWordGender } = props;

  const [word, setWord] = useState("");
  const [wordInput, setWordInput] = useState("");
  const [deboundedWord] = useDebounce(word, 1000);
  const [appear, setAppear] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchWordGender = async () => {
      if (deboundedWord) {
        setIsLoading(true);
        setWordGender(determineGender(deboundedWord));
        setIsLoading(false);
      } else {
        setWordGender(Genders.None);
      }
    };

    fetchWordGender();
  }, [setWordGender, deboundedWord]);

  useEffect(() => setAppear(true), [wordGender]);

  const getLastCapitalizedWord = (text: string) => {
    const letterOnlyText = text.replace(/[^a-zA-Z\x7f-\xff ]/g, "");
    const wordSplit = letterOnlyText.split(/\s+/);
    const lastWord = wordSplit.pop() ?? "";
    const newWord =
      lastWord.charAt(0).toUpperCase() + lastWord.slice(1).toLocaleLowerCase();

    setWord(newWord);
    setWordInput(letterOnlyText);
  };

  // Is a seperate variable because Prettier doesn't correctly format this in the JSX
  const showText = (deboundedWord && wordGender !== Genders.None) || isLoading;

  return (
    <div
      className={`${styles.inputModal} left-1/2 text-center p-10 fixed rounded-lg bg-white text-gray-900 max-w-[80%] dark:bg-gray-800 dark:text-white`}
    >
      <h1 className='mb-5 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl'>
        Welcome to DerDieDas!
      </h1>
      <h2 className='mb-10 text-xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-3xl'>
        Enter a German noun below to find out it's gender!
      </h2>
      <input
        type='text'
        id='default-input'
        className='bg-gray-50 border text-xl border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder='Enter the Noun!'
        value={wordInput}
        onChange={(event) => getLastCapitalizedWord(event.target.value)}
      ></input>

      {/* Can use an and logical operator since debouncedWord cannot be 0 */}
      {showText && (
        <div className='text-4xl font-extrabold leading-none tracking-tight mt-12 mb-5 md:text-6xl lg:text-7xl'>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {
                <span
                  className={`${
                    styles.wordGender
                  } ${wordGender.toLowerCase()} ${
                    wordGender === Genders.Masculine ? "text-white" : ""
                  } p-3`}
                  onAnimationEnd={() => setAppear(false)}
                  data-appear={appear}
                >
                  {wordGender === Genders.Invalid ? "Invalid Word" : wordGender}
                </span>
              }
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default InputModal;
