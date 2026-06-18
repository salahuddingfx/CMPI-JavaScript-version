import { useState } from 'react';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <PageTransition>
      <SEO title="Contact Us" description="Get in touch with CMPI. We are here to help you." />
      
      {/* Page Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message or visit our campus.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary border border-slate-100 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Campus Address</h4>
                      <p className="text-gray-600 text-sm">Kolatoli Road, Cox's Bazar - 4700, Bangladesh</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary border border-slate-100 shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Phone Number</h4>
                      <p className="text-gray-600 text-sm">+880 1234 567890</p>
                      <p className="text-gray-600 text-sm">+880 0987 654321</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary border border-slate-100 shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Email Address</h4>
                      <p className="text-gray-600 text-sm">info@cmpi.edu.bd</p>
                      <p className="text-gray-600 text-sm">admission@cmpi.edu.bd</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all border border-slate-100">
                      <Globe className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="Admission Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Your Message</label>
                    <textarea 
                      name="message"
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="h-[450px] w-full bg-slate-100 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14815.700146036136!2d91.9772!3d21.4339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc80000000001%3A0x1234567890abcdef!2sCox's%20Bazar%20Model%20Polytechnic%20Institute!5e0!3m2!1sen!2sbd!4v1234567890123" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </section>
    </PageTransition>
  );
};

export default Contact;
