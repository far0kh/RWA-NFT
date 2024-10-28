'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useFormState } from "react-dom";
import { addSubscriber } from '@/lib/actions';
import confetti from 'canvas-confetti';

const runConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
};

const SubscribeForm = () => {
  const [state, formAction] = useFormState(addSubscriber, undefined);
  const [email, setEmail] = useState('');
  const [isExist, setIsExist] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state === 'Subscriber saved successfully') {
      setShowMessage(true);
      setIsExist(false);
      runConfetti();
    } else if (state === 'Mail already exists') {
      setShowMessage(true);
      setIsExist(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
        setIsExist(false);
        // setEmail('');
        formAction(undefined);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formAction(email);
  };

  return (
    <section id="Subscribe" className="antialiased w-full pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-4 text-3xl tracking-tight font-extrabold sm:text-4xl text-white">
          Stay Connected
        </h2>
        <p className="mx-auto mb-8 max-w-2xl font-light md:mb-12 sm:text-xl text-gray-400">
          Submit your email address to subscribe to our newsletter and get the newest updates and exclusive offers.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
            <div className="relative w-full">
              <div className='custom-substack-widget csw-theme bg-green-600 border-green-600 hover:bg-green-700 hover:border-green-700'>
                <input
                  type="email"
                  name="email"
                  required
                  className="custom-substack-widget csw-theme-input"
                  placeholder="example@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  disabled={showMessage}
                />
                <button type="submit" disabled={showMessage}>
                  {showMessage && !isExist ? "✔" : "Subscribe"}
                </button>
              </div>
            </div>
          </div>
        </form>

        <div className="items-center mx-auto mb-3 max-w-screen-sm">
          {showMessage && (
            <p className="text-white mt-4">
              {isExist ?
                'Looks like you\u0027re already subscribed!'
                : 'We\u0027re excited to welcome you to our community of subscribers!'}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SubscribeForm;