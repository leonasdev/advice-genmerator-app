import { useCallback, useEffect, useState } from "react";

interface Quote {
  slip: {
    id: string;
    advice: string;
  };
}

function App() {
  const [quote, setQuote] = useState<Quote>({
    slip: {
      id: "",
      advice: "",
    },
  });

  const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(false);

  const [messages, setMessages] = useState<JSX.Element[]>([]);

  const renderNewQuote = useCallback(() => {
    setIsBtnDisabled(true);
    setQuote({ slip: { id: "", advice: "" } });
    fetchRandomQuoteString()
      .then((data) => {
        setQuote(data);
        setTimeout(() => {
          setIsBtnDisabled(false);
        }, 2000);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    renderNewQuote();
  }, []);

  return (
    <div className="bg-dark-blue h-screen flex justify-center items-center font-manrope">
      <main className="w-full xs:w-[34rem] mx-4 bg-dark-grayish-blue rounded-lg flex flex-col items-center relative">
        <h1 className="sr-only">Advice Generator Component</h1>
        <h2 className="uppercase tracking-[0.3em] text-neon-green text-xs xs:text-sm mt-10 font-medium">
          Advice #{quote.slip.id}
        </h2>
        <p
          className="font-extrabold text-light-cyan text-2xl xs:text-[1.75rem] mt-6 mx-6 xs:mx-12 text-center cursor-pointer hover:text-light-cyan/50"
          onClick={() => {
            navigator.clipboard.writeText(quote.slip.advice);
            setMessages(prevMessages => [...prevMessages, CopyMessages()]);
            setTimeout(() => {
              setMessages(prevMessages => prevMessages.slice(1));
            }, 2000);
          }}
        >
          {quote.slip.id == "" ? `Loading...` : `“${quote.slip.advice}”`}
        </p>
        <svg className="mt-8 mb-16 xs:hidden" width="295" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
            <g transform="translate(138)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
        <svg className="mt-8 mb-16 hidden xs:block" width="444" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
        <button
          type="button"
          disabled={isBtnDisabled}
          className="p-5 rounded-full bg-neon-green cursor-pointer absolute bottom-0 translate-y-[50%] hover:shadow-[0_0px_10px_0px] hover:shadow-neon-green disabled:bg-light-cyan disabled:cursor-default disabled:shadow-none group"
          onClick={() => renderNewQuote()}
        >
          <svg className="group-disabled:animate-spin" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </main>
      <div className="absolute bottom-3 right-3">
        {messages}
      </div>
    </div>
  );
}

function CopyMessages() {
  return (
    <div
      key={Date.now()}
      className="flex justify-center items-center text-light-cyan border border-light-cyan rounded p-2 mt-3 text-xs"
    >
      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M336 64h32a48 48 0 0148 48v320a48 48 0 01-48 48H144a48 48 0 01-48-48V112a48 48 0 0148-48h32"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          x="176"
          y="32"
          width="160"
          height="64"
          rx="26.13"
          ry="26.13"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
      Copied to Clipboard!
    </div>
  );
}

async function fetchRandomQuoteString(): Promise<Quote> {
  const url = "https://api.adviceslip.com/advice";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const quote = await response.json() as Quote;

  return quote;
}

export default App;
