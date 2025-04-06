import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "contact@example.com",
      link: "mailto:contact@example.com",
      color: "blue"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Darmstadt, Germany",
      color: "red"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+1 (234) 567-890",
      link: "tel:+1234567890",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500',
        light: 'bg-blue-100 dark:bg-blue-500/20',
        text: 'text-blue-600 dark:text-blue-400',
        hover: 'hover:bg-blue-600 dark:hover:bg-blue-500',
        ring: 'focus:ring-blue-500 dark:focus:ring-blue-400'
      },
      red: {
        bg: 'bg-red-500',
        light: 'bg-red-100 dark:bg-red-500/20',
        text: 'text-red-600 dark:text-red-400',
        hover: 'hover:bg-red-600 dark:hover:bg-red-500',
        ring: 'focus:ring-red-500 dark:focus:ring-red-400'
      },
      green: {
        bg: 'bg-green-500',
        light: 'bg-green-100 dark:bg-green-500/20',
        text: 'text-green-600 dark:text-green-400',
        hover: 'hover:bg-green-600 dark:hover:bg-green-500',
        ring: 'focus:ring-green-500 dark:focus:ring-green-400'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-white/[0.02]" />
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white transition-colors">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group">
                  <div className={`p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden`}>
                    <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 ${getColorClasses(info.color).bg} opacity-10 rounded-full transform group-hover:scale-150 transition-transform duration-500`}></div>
                    
                    <div className="flex items-start relative">
                      <div className={`p-3 rounded-lg ${getColorClasses(info.color).light} transform group-hover:scale-110 transition-all duration-300`}>
                        <span className={`text-xl ${getColorClasses(info.color).text}`}>
                          {info.icon}
                        </span>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white transition-colors">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className={`${getColorClasses(info.color).text} hover:underline`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-300">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] -mr-48 -mt-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full opacity-50 transform group-hover:scale-110 transition-transform duration-500"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
