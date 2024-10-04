import React, { useEffect, useState } from 'react';

export default function Profile() {
  const [questions, setQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch('/questions.json');
      const data = await response.json();
      setQuestions(data);
    };

    fetchQuestions();
  }, []);

  const handleToggle = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className='bg-black w-full h-[500px]'>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Your Workouts
            </h2>
          </div>
          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            {questions.map(({ id, question, videoId }) => (
              <div key={id} className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                <button 
                  type="button" 
                  onClick={() => handleToggle(id)} 
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span className="flex text-lg font-semibold text-black">{question}</span>
                  <svg 
                    className={`w-6 h-6 text-gray-400 transform transition-transform ${activeQuestion === id ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {activeQuestion === id && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <iframe 
                      width="100%" 
                      height="315" 
                      src={`https://www.youtube.com/embed/${videoId}`} 
                      frameBorder="0" 
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-base mt-9">
            Still have questions?
            <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline"> Contact our support</span>
          </p>
        </div>
      </section>
    </div>
  );
}
