import React from 'react';
import {
  Video,
  MessageCircle,
  Users,
  Instagram,
  MessageSquare,
  GitBranch as BrandTiktok,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#303994] text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-6xl font-black tracking-tight mb-2">Snarketing</h1>
        <p className="text-xl italic opacity-90">
          Marketing, but make it snarky.
        </p>
      </header>

      {/* Hero Section */}
      <section className="relative mb-16 pb-16">
        <div className="absolute inset-0">
          <img
            src="https://i.postimg.cc/gJfhssyg/hero3.png"
            alt="University of Miami"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#303994] bg-opacity-35"></div>
        </div>
        <div className="relative container mx-auto px-4 pt-32 pb-[28rem] text-center">
          <h2 className="text-7xl md:text-7xl font-bold mb-6">
            Snark That Sells
          </h2>
          <p className="text-2xl md:text-3xl mb-10 opacity-90">
            Helping small businesses connect with UM students through bold,
            engaging content.
          </p>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <a
            href="https://www.instagram.com/snarketingmiami/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#303994] px-10 py-4 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all inline-block text-center"
          >
            See What's Hot
          </a>
        </div>
      </section>

      {/* Featured Spots Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Popular Spots We've Featured
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://www.instagram.com/lipehow/"
              target="_blank"
            >
            <div className="relative rounded-xl overflow-hidden group">
              <img
                src="https://i.ibb.co/TqbF0zRc/yoga.jpg"
                alt="Yoga studio"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-[#303994] bg-opacity-40 flex items-end opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-4">
                  <h3 className="text-xl font-bold">Lipehow Yoga</h3>
                  <p>Perfect break between classes</p>
                </div>
              </div>
            </div>
            </a>
            <a
              href="https://www.instagram.com/groucoffee/"
              target="_blank"
            >
            <div className="relative rounded-xl overflow-hidden group">
              <img
                src="https://cdn.prod.website-files.com/64de78012b2420ea317f1472/6552433968af20ef6e16f607_1200x630.png"
                alt="Cafe"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-[#303994] bg-opacity-40 flex items-end opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-4">
                  <h3 className="text-xl font-bold">Grou Coffee</h3>
                  <p>Best coffee place with coworking near campus</p>
                </div>
              </div>
            </div>
            </a>
            <a
              href="https://www.instagram.com/honeyveilco/"
              target="_blank"
            >
            <div className="relative rounded-xl overflow-hidden group">
              <img
                src="https://i.postimg.cc/XYVCspF6/honeyveil.png"
                alt="Bookstore"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-[#303994] bg-opacity-40 flex items-end opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-4">
                  <h3 className="text-xl font-bold">Honey Veil Matcha</h3>
                  <p>Most wanted matcha on campus</p>
                </div>
              </div>
            </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="bg-white text-[#303994] py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What's Snarketing?
              </h2>
              <p className="text-xl leading-relaxed">
                We're a student team redefining marketing through humor,
                authenticity, and bold creativity. From TikToks to Insta reels,
                we spotlight the coolest local businesses and make them
                impossible to ignore.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="Students collaborating"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white bg-opacity-10 p-8 rounded-xl">
            <Video className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Create</h3>
            <p>Short-form videos, interviews & photo shoots</p>
          </div>
          <div className="text-center bg-white bg-opacity-10 p-8 rounded-xl">
            <MessageCircle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Promote</h3>
            <p>Social media buzz across TikTok & Instagram</p>
          </div>
          <div className="text-center bg-white bg-opacity-10 p-8 rounded-xl">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Connect</h3>
            <p>Linking small businesses with UM students</p>
          </div>
        </div>
      </section>

      {/* Metrics with Background Image */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img
            src="https://d13b2ieg84qqce.cloudfront.net/e40f61e5b6afdb27e25e6e456f892cad29bcee5b"
            alt="Campus life"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FFFFFF] bg-opacity-20"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm border-4">
              <p className="text-4xl font-black mb-2">27,504</p>
              <p className="text-lg">Views in 90 days</p>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm border-4">
              <p className="text-4xl font-black mb-2">15,385</p>
              <p className="text-lg">Unique accounts</p>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm border-4">
              <p className="text-4xl font-black mb-2">1012</p>
              <p className="text-lg">Interactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial with Image */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <MessageSquare className="w-12 h-12 mb-6 opacity-75 mx-auto md:mx-0" />
              <blockquote className="text-2xl italic mb-4">
                "I literally found my favorite coffee shop through Snarketing."
              </blockquote>
              <p className="opacity-75">— UM Student</p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
                alt="Coffee shop"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-6">
            <a
              href="https://www.instagram.com/snarketingmiami/"
              target="_blank"
              className="hover:opacity-75 transition-opacity"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@snarketingmiami"
              target="_blank"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="https://www.edigitalagency.com.au/wp-content/uploads/TikTok-icon-white-symbol-glyph-png.png"
                alt="TikTok Icon"
                className="w-6 h-6"
              />
            </a>
          </div>
          <p className="mb-4">snarketingum@gmail.com</p>
          <p className="text-sm opacity-75">
            Made by UM students who believe marketing should be fun — and
            actually work.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
