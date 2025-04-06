
import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="mb-6 text-lg">
                I'm interested in new opportunities, especially challenging projects. If you have a question or just want to say hi, don't hesitate to contact me!
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="text-primary mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:your-email@example.com" className="text-foreground/80 hover:text-primary transition-colors">
                      your-email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Linkedin className="text-primary mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/your-profile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      linkedin.com/in/your-profile
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Github className="text-primary mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold">GitHub</h4>
                    <a 
                      href="https://github.com/your-username" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      github.com/your-username
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-primary mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-foreground/80">Darmstadt, Germany</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
