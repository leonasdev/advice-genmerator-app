function App() {
  return (
    <div className="bg-dark-blue h-screen flex justify-center items-center font-manrope">
      <main className="w-full xs:w-[34rem] mx-4 bg-dark-grayish-blue rounded-lg flex flex-col items-center relative">
        <h2 className="uppercase tracking-[0.3em] text-neon-green text-xs xs:text-sm mt-10 font-medium">
          Advice #117
        </h2>
        <p className="font-extrabold text-light-cyan text-2xl xs:text-[1.75rem] mt-6 mx-6 xs:mx-12 text-center">
          “It is easy to sit up and take notice, what's difficult is getting up and taking action.”
        </p>
        <svg className="mt-8 mb-16 xs:hidden" width="295" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
            <g transform="translate(138)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
        <svg className="mt-8 mb-16 hidden xs:block" width="444" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
        <div className="p-5 rounded-full bg-neon-green cursor-pointer absolute bottom-0 translate-y-[50%]">
          <img src="../images/icon-dice.svg" alt="icon of dice" />
        </div>
      </main>
    </div>
  );
}

export default App;
