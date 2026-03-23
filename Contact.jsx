Now let me create the Contact page and update the main App.js with all routes:
Action: file_editor create /app/frontend/src/pages/Contact.jsx --file-text "import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { contactInfo } from '../mock/data';
import { Mail, Instagram, Youtube, Twitter, Facebook, Send, MapPin, Phone } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: \"Message sent!\",
      description: \"Thank you for reaching out. I'll get back to you soon!\",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const socialLinks = [
    { icon: Instagram, url: contactInfo.social.instagram, label: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: Youtube, url: contactInfo.social.youtube, label: 'YouTube', color: 'hover:bg-red-500' },
    { icon: Twitter, url: contactInfo.social.twitter, label: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: Facebook, url: contactInfo.social.facebook, label: 'Facebook', color: 'hover:bg-blue-600' }
  ];

  return (
    <div className=\"min-h-screen bg-white\">
      <Navbar />

      {/* Header Section */}
      <section className=\"pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white\">
        <div className=\"max-w-4xl mx-auto text-center\">
          <h1 className=\"text-5xl sm:text-6xl font-serif font-bold text-slate-900 mb-6\">
            Get In Touch
          </h1>
          <p className=\"text-xl text-slate-600 leading-relaxed\">
            Have a question about a destination? Want to collaborate? Or just want to say hello? 
            I'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className=\"py-12 px-4 sm:px-6 lg:px-8\">
        <div className=\"max-w-6xl mx-auto\">
          <div className=\"grid grid-cols-1 lg:grid-cols-3 gap-12\">
            {/* Contact Info Sidebar */}
            <div className=\"lg:col-span-1 space-y-8\">
              {/* Email */}
              <div className=\"bg-slate-50 rounded-2xl p-6\">
                <div className=\"bg-amber-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4\">
                  <Mail className=\"h-6 w-6 text-amber-600\" />
                </div>
                <h3 className=\"text-lg font-semibold text-slate-900 mb-2\">Email Me</h3>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className=\"text-slate-600 hover:text-amber-600 transition-colors duration-200 break-all\"
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* Social Media */}
              <div className=\"bg-slate-50 rounded-2xl p-6\">
                <div className=\"bg-amber-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4\">
                  <Instagram className=\"h-6 w-6 text-amber-600\" />
                </div>
                <h3 className=\"text-lg font-semibold text-slate-900 mb-4\">Follow Me</h3>
                <div className=\"flex flex-wrap gap-3\">
                  {socialLinks.map(({ icon: Icon, url, label, color }) => (
                    <a
                      key={label}
                      href={url}
                      target=\"_blank\"
                      rel=\"noopener noreferrer\"
                      aria-label={label}
                      className={`p-3 bg-white rounded-lg hover:text-white transition-all duration-200 shadow-sm hover:shadow-md ${color}`}
                    >
                      <Icon className=\"h-5 w-5\" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Office Info */}
              <div className=\"bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-6 text-white\">
                <div className=\"bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4\">
                  <MapPin className=\"h-6 w-6\" />
                </div>
                <h3 className=\"text-lg font-semibold mb-2\">Currently Exploring</h3>
                <p className=\"text-amber-100\">
                  Somewhere amazing... Follow along on my social media to see where I am now!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className=\"lg:col-span-2\">
              <div className=\"bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12\">
                <h2 className=\"text-3xl font-serif font-bold text-slate-900 mb-6\">
                  Send Me a Message
                </h2>
                
                <form onSubmit={handleSubmit} className=\"space-y-6\">
                  <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6\">
                    {/* Name */}
                    <div>
                      <label htmlFor=\"name\" className=\"block text-sm font-medium text-slate-700 mb-2\">
                        Your Name *
                      </label>
                      <Input
                        type=\"text\"
                        id=\"name\"
                        name=\"name\"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder=\"John Doe\"
                        className=\"w-full border-slate-200 focus:border-amber-500 focus:ring-amber-500\"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor=\"email\" className=\"block text-sm font-medium text-slate-700 mb-2\">
                        Your Email *
                      </label>
                      <Input
                        type=\"email\"
                        id=\"email\"
                        name=\"email\"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder=\"john@example.com\"
                        className=\"w-full border-slate-200 focus:border-amber-500 focus:ring-amber-500\"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor=\"subject\" className=\"block text-sm font-medium text-slate-700 mb-2\">
                      Subject *
                    </label>
                    <Input
                      type=\"text\"
                      id=\"subject\"
                      name=\"subject\"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder=\"What's this about?\"
                      className=\"w-full border-slate-200 focus:border-amber-500 focus:ring-amber-500\"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor=\"message\" className=\"block text-sm font-medium text-slate-700 mb-2\">
                      Message *
                    </label>
                    <Textarea
                      id=\"message\"
                      name=\"message\"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder=\"Tell me about your travel plans, questions, or collaboration ideas...\"
                      className=\"w-full border-slate-200 focus:border-amber-500 focus:ring-amber-500 resize-none\"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type=\"submit\"
                    size=\"lg\"
                    className=\"w-full bg-amber-600 hover:bg-amber-700 text-white transition-colors duration-200\"
                  >
                    <Send className=\"h-5 w-5 mr-2\" />
                    Send Message
                  </Button>
                </form>

                <p className=\"text-sm text-slate-500 mt-6 text-center\">
                  I typically respond within 24-48 hours. Looking forward to connecting!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className=\"py-16 px-4 sm:px-6 lg:px-8 bg-slate-50\">
        <div className=\"max-w-4xl mx-auto\">
          <h2 className=\"text-3xl font-serif font-bold text-slate-900 mb-8 text-center\">
            Frequently Asked Questions
          </h2>
          
          <div className=\"space-y-6\">
            <div className=\"bg-white rounded-xl p-6 shadow-sm\">
              <h3 className=\"text-lg font-semibold text-slate-900 mb-2\">
                Do you accept sponsored content?
              </h3>
              <p className=\"text-slate-600\">
                Yes, I'm open to collaborations that align with my values and would be valuable to my audience. 
                Please reach out with details about your brand and proposal.
              </p>
            </div>

            <div className=\"bg-white rounded-xl p-6 shadow-sm\">
              <h3 className=\"text-lg font-semibold text-slate-900 mb-2\">
                Can you help me plan my trip?
              </h3>
              <p className=\"text-slate-600\">
                While I can't offer personalized itinerary planning, feel free to ask specific questions about 
                destinations I've visited, and I'll do my best to help!
              </p>
            </div>

            <div className=\"bg-white rounded-xl p-6 shadow-sm\">
              <h3 className=\"text-lg font-semibold text-slate-900 mb-2\">
                How can I stay updated with your travels?
              </h3>
              <p className=\"text-slate-600\">
                Follow me on Instagram and YouTube for real-time updates, stories, and behind-the-scenes content 
                from my adventures. Subscribe to the newsletter for monthly roundups and exclusive content.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
"
Observation: Create successful: /app/frontend/src/pages/Contact.jsx
