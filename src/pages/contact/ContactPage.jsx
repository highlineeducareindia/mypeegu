import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, ArrowRight } from 'lucide-react';
import Button from '../../components/Button';
import HeroSection from '../../components/HeroSection';
import { API_ENDPOINTS } from "../../config/api";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: ''
  });
  const [status, setStatus] = useState({ loading: false, message: '', isError: false });
  const [contactInfo, setContactInfo] = useState({ phone: '+91 91084 75110', email: 'hi@mypeegu.in' });

  // Fetch global settings for contact info
  useEffect(() => {
    fetch(API_ENDPOINTS.CONTACT_SUBMIT)
      .then(res => res.json())
      .then(result => {
        if(result.success && result.data) {
          setContactInfo({
            phone: result.data.phone || '+91 91084 75110',
            email: result.data.email || 'hi@mypeegu.in'
          });
        }
      })
      .catch(err => console.error("Error fetching contact info:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic Validation
    if(!formData.name || !formData.email || !formData.message) {
      setStatus({ loading: false, message: 'Please fill all required fields.', isError: true });
      return;
    }

    setStatus({ loading: true, message: '', isError: false });

    try {
      const res = await fetch(API_ENDPOINTS.CONTACT_SUBMIT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (data.success) {
        setStatus({ loading: false, message: data.message, isError: false });
        setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
        
        // Hide success message after 5 seconds
        setTimeout(() => setStatus({ loading: false, message: '', isError: false }), 5000);
      } else {
        setStatus({ loading: false, message: data.message, isError: true });
      }
    } catch (error) {
      setStatus({ loading: false, message: 'Server error. Please try again later.', isError: true });
    }
  };

  // Common Tailwind class for inputs
  const inputClass = "w-full px-5 py-3.5 rounded-2xl bg-slate-50 border-2 border-transparent outline-none transition-all duration-300 focus:border-[#1E88E5] focus:bg-white focus:shadow-[0_4px_12px_rgba(30,136,229,0.08)] text-sm sm:text-base";

  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden font-sans">
      
      <HeroSection
        badge="Connect with Experts"
        title="Let’s Start a"
        highlight="Conversation"
        description="Whether you have questions, need guidance, or want to collaborate — our experts are here to support you every step of the way."
        buttonText="Speak With Our Team"
      />

      {/* --- FORM & INFO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1a365d]">Contact Details</h2>
              <div className="w-16 h-1 bg-[#FFB300] mt-3 rounded-full mx-auto lg:mx-0" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:space-y-6">
              <DetailCard icon={<Mail />} color="bg-red-50 text-[#E53935]" title="Email Us" detail={contactInfo.email} />
              <DetailCard icon={<Phone />} color="bg-blue-50 text-[#1E88E5]" title="Call Us" detail={contactInfo.phone} />
              <div className="sm:col-span-2 lg:col-span-1">
                <DetailCard icon={<MapPin />} color="bg-orange-50 text-[#FFB300]" title="Our Location" detail="Bengaluru, Karnataka, India" />
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-slate-50">
              
              {/* Status Message */}
              {status.message && (
                <div className={`p-4 mb-6 rounded-xl text-sm font-bold flex items-center gap-2 ${status.isError ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-green-50 text-green-600 border border-green-100'}`}>
                  {status.isError ? <MessageCircle size={18} /> : <Mail size={18} />}
                  {status.message}
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 ml-1">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className={inputClass} required />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 ml-1">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className={inputClass} required />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 ml-1">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" className={inputClass} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 ml-1">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="How can we help?" className={`${inputClass} resize-none`} required></textarea>
                </div>
                
                <Button type="submit" disabled={status.loading} className="w-full py-4 bg-[#1a365d] text-white rounded-2xl font-bold text-base hover:bg-[#1E88E5] transition-all flex items-center justify-center gap-3 shadow-lg active:scale-[0.98] disabled:opacity-70">
                  {status.loading ? 'Sending...' : 'Send Message'} <Send size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATIC CLOSING CTA SECTION --- */}
      <section className="bg-white py-16 lg:py-24 border-t border-slate-100 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 opacity-50"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#1E88E5] rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#1E88E5] animate-pulse"></span>
            Ready to Transform
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Build Emotionally Intelligent <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E88E5] to-[#1a365d]">Institutions With Us</span>
          </h2>
          
          <p className="text-lg text-slate-600 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the MyPeegu ecosystem. Let's work together to create environments where psychology leads, technology supports, and students thrive.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="mailto:hi@mypeegu.in">
              <Button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1E88E5] text-white font-bold hover:bg-[#1565C0] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
                Email Us Directly <ArrowRight size={18} />
              </Button>
            </a>
            <a href="/explorer/students" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-50 text-slate-700 font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 border border-slate-200">
              Explore Solutions
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

const DetailCard = ({ icon, color, title, detail }) => (
  <div className="flex items-center gap-4 p-4 lg:p-6 bg-white rounded-3xl border border-slate-50 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
    <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex-shrink-0 flex items-center justify-center ${color} transition-transform group-hover:scale-110`}>
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <div className="min-w-0">
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{title}</p>
      <p className="text-sm lg:text-lg font-bold text-[#1a365d] truncate">{detail}</p>
    </div>
  </div>
);