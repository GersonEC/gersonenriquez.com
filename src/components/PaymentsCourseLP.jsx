import React, { useState } from 'react';
import {
  CreditCard,
  Code,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Code2,
} from 'lucide-react';

export default function PaymentsCourseLP() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    console.log('Email submitted:', email);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  const modules = [
    {
      number: '01',
      title: 'Understanding the Payment Flow',
      description: 'Learn what really happens when someone pays',
      icon: <Zap className='w-6 h-6' />,
    },
    {
      number: '02',
      title: 'Build your first web-based payment app',
      description: 'build a simple checkout flow from scratch',
      icon: <CreditCard className='w-6 h-6' />,
    },
    {
      number: '03',
      title: 'Stripe integration',
      description: 'one-time payments and subscriptions',
      icon: <Globe className='w-6 h-6' />,
    },
    {
      number: '04',
      title: 'Paddle integration',
      description: 'understand the power of a merchant of record',
      icon: <Code className='w-6 h-6' />,
    },
  ];

  const benefits = [
    'Build real-world projects with Stripe and Paddle',
    'Learn by building, not just watching videos',
    'Understand the business side of payments',
    'From basics to intermediate / advanced level',
  ];

  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      {/* Hero Section */}
      <div className='relative overflow-hidden'>
        {/* Animated background elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>
          <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>
          <div className='absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000'></div>
        </div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16'>
          {/* Badge */}
          <div className='flex justify-center mb-8'>
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm'>
              <Code2 className='w-4 h-4 text-purple-300' />
              <span className='text-purple-200 text-sm font-medium'>
                Hands-on Payment Integration Course
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className='text-center mb-12'>
            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'>
              Master Payments
              <br />
              <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
                By Building
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance'>
              Learn how payments really work and integrate Stripe & Paddle into
              your projects.
            </p>
          </div>

          {/* Email Capture Form */}
          <div className='max-w-md mx-auto mb-12'>
            <form onSubmit={handleSubmit} className='relative'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                required
                className='w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
              />
              <button
                type='submit'
                className='absolute right-2 top-3 sm:top-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 flex items-center gap-2'
              >
                {submitted ? (
                  'Subscribed! ✓'
                ) : (
                  <div>
                    <span className='hidden sm:inline'>Get Early Access</span>
                    <ArrowRight className='w-4 h-4' />
                  </div>
                )}
              </button>
            </form>
            {error && (
              <p className='text-red-400 text-sm text-center mt-3'>{error}</p>
            )}
            <p className='text-gray-400 text-sm text-center mt-3'>
              Join the waitlist • No spam, ever
            </p>
          </div>

          {/* Social Proof */}
          <div className='text-center text-gray-200 text-md font-medium'>
            <p>Perfect for mid-junior developers building real products</p>
          </div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className='w-full sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Build Real Payment Systems
          </h2>
          <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
            This is how I think the course will be structured, it could change.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-6 mb-16'>
          {modules.map((module, index) => (
            <div
              key={index}
              className='group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 cursor-pointer'
            >
              <div className='flex items-start gap-4 mb-4'>
                <div className='flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white'>
                  {module.icon}
                </div>
                <div className='flex-1'>
                  <div className='text-purple-400 text-sm font-semibold mb-1'>
                    Module {module.number}
                  </div>
                  <h3 className='text-white font-bold text-lg mb-2'>
                    {module.title}
                  </h3>
                  <p className='text-gray-400 text-sm'>{module.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className='bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 border border-purple-500/20'>
          <h3 className='text-2xl md:text-3xl font-bold text-white mb-8 text-center'>
            Why This Course is Different
          </h3>
          <div className='grid md:grid-cols-2 gap-4 max-w-3xl mx-auto'>
            {benefits.map((benefit, index) => (
              <div key={index} className='flex items-start gap-3'>
                <CheckCircle className='w-6 h-6 text-green-400 flex-shrink-0 mt-1' />
                <span className='text-gray-200 text-lg'>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='w-full sm:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Ready to Learn Payments?
          </h2>
          <p className='text-purple-100 text-lg mb-8 max-w-2xl mx-auto'>
            Join the waitlist to get notified when the course launches. Early
            subscribers get special pricing.
          </p>
          <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
            <div className='flex flex-col sm:flex-row gap-3'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='your.email@example.com'
                required
                className='flex-1 px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300'
              />
              <button
                type='submit'
                className='px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 whitespace-nowrap'
              >
                Join Waitlist
              </button>
            </div>
            {error && (
              <p className='text-red-200 text-sm text-center mt-3'>{error}</p>
            )}
            {submitted && (
              <p className='text-green-200 text-sm text-center mt-3'>
                Successfully subscribed! ✓
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10'>
        <div className='text-center text-gray-400'>
          <p className='mb-2'>Created by Gerson Enriquez</p>
          <p className='text-sm'>Frontend Developer & Solopreneur • Milan</p>
        </div>
      </div>
    </div>
  );
}
