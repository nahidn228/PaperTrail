import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

// Option 1: Classic Professional Signature
const ClassicSignature: React.FC = () => {
  return (
    <div className="max-w-md font-sans text-sm text-gray-700">
      <div className="flex items-start space-x-5">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="https://i.ibb.co.com/fYdZG5vJ/a-studio-portrait-photograph-of-a-young-w-ZN-sjn-RTRWu1-Bn8-HHAXow-e-XYa-UDXCSm-Kvpo-Uuwx-El8w.jpg"
            alt="Nahid Hasan"
            className="w-20 h-20 rounded-full object-cover border-2 border-blue-100"
          />
        </div>
        
        {/* Content */}
        <div className="flex-1 space-y-2">
          {/* Name & Title */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">Nahid Hasan</h3>
            <p className="text-blue-600 font-medium">MERN Stack Developer</p>
            <p className="text-xs text-gray-500 mt-1">Full-Stack Web Developer • React • Node.js • MongoDB</p>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3 text-gray-400" />
              <span>nahidn228@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3 text-gray-400" />
              <span>+880 1798 324 439</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3 h-3 text-gray-400" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-3 pt-2">
            <a
              href="https://www.linkedin.com/in/nahid-hasan01/"
              className="hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/32/174/174857.png"
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://github.com/nahidn228"
              className="hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/32/25/25231.png"
                alt="GitHub"
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://x.com/nahidn228"
              className="hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/32/733/733579.png"
                alt="Twitter"
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://wa.me/+8801798324439"
              className="hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/32/733/733585.png"
                alt="WhatsApp"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
      
      {/* Tagline */}
      <div className="mt-4 pt-3 border-t-2 border-blue-500">
        <p className="text-xs text-gray-500 italic">
          "Building scalable web solutions with modern technologies"
        </p>
      </div>
    </div>
  );
};

// Option 2: Minimal Clean Signature
const MinimalSignature: React.FC = () => {
  return (
    <div className="max-w-sm font-sans text-sm">
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-gray-900">Nahid Hasan</h3>
        <p className="text-blue-600 text-sm font-medium">MERN Stack Developer</p>
        
        <div className="space-y-1 text-xs text-gray-600">
          <div>📧 nahidhasan.cse228@gmail.com</div>
          <div>📱 +880 1798 324 439</div>
          <div>📍 Dhaka, Bangladesh</div>
        </div>
        
        <div className="pt-2 text-xs">
          <a
            href="https://www.linkedin.com/in/nahidn228/"
            className="text-blue-600 hover:underline mr-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="https://github.com/nahidn228"
            className="text-gray-700 hover:underline mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="https://x.com/nahidn228"
            className="text-blue-500 hover:underline ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

// Option 3: Modern Card Style Signature
const ModernCardSignature: React.FC = () => {
  return (
    <div className="max-w-md bg-gray-50 border border-gray-200 rounded-lg p-5 font-sans">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://raw.githubusercontent.com/nahidn228/nahidn228/refs/heads/main/Nahid%20Hasan%20Banner.png"
          alt="Nahid Hasan"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-bold text-gray-800">Nahid Hasan</h3>
          <p className="text-blue-500 text-sm font-medium">MERN Stack Developer</p>
        </div>
      </div>
      
      {/* Contact Info */}
      <div className="space-y-2 mb-4 text-xs text-gray-600">
        <div className="flex items-center">
          <span className="w-5 flex-shrink-0">📧</span>
          <span>nahidhasan.cse228@gmail.com</span>
        </div>
        <div className="flex items-center">
          <span className="w-5 flex-shrink-0">📱</span>
          <span>+880 1798 324 439</span>
        </div>
        <div className="flex items-center">
          <span className="w-5 flex-shrink-0">📍</span>
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>
      
      {/* Tech Stack & Social Links */}
      <div className="border-t border-gray-300 pt-3">
        <p className="text-xs text-gray-500 mb-3">
          React • Node.js • MongoDB • Express.js • TypeScript
        </p>
        
        <div className="flex space-x-2">
          <a
            href="https://www.linkedin.com/in/nahidn228/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="https://img.shields.io/badge/-LinkedIn-0077B5?style=flat-square&logo=LinkedIn&logoColor=white"
              alt="LinkedIn"
              className="h-5"
            />
          </a>
          <a
            href="https://github.com/nahidn228"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"
              alt="GitHub"
              className="h-5"
            />
          </a>
          <a
            href="https://x.com/nahidn228"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="https://img.shields.io/badge/-Twitter-1DA1F2?style=flat-square&logo=Twitter&logoColor=white"
              alt="Twitter"
              className="h-5"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

// Option 4: Compact Professional Signature
const CompactSignature: React.FC = () => {
  return (
    <div className="max-w-sm font-sans">
      <div className="flex items-center space-x-3 mb-3">
        <img
          src="https://raw.githubusercontent.com/nahidn228/nahidn228/refs/heads/main/Nahid%20Hasan%20Banner.png"
          alt="Nahid Hasan"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="text-sm font-bold text-gray-900">Nahid Hasan</h3>
          <p className="text-xs text-blue-600 font-medium">MERN Stack Developer</p>
        </div>
      </div>
      
      <div className="text-xs text-gray-600 space-y-1">
        <div>📧 nahidhasan.cse228@gmail.com</div>
        <div>📱 +880 1798 324 439 📍 Dhaka, Bangladesh</div>
        
        <div className="pt-2 flex items-center space-x-3">
          <a
            href="https://www.linkedin.com/in/nahidn228/"
            className="text-blue-600 hover:underline flex items-center space-x-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://github.com/nahidn228"
            className="text-gray-700 hover:underline flex items-center space-x-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Option 5: Developer-Themed Signature
const DeveloperSignature: React.FC = () => {
  return (
    <div className="max-w-md bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
      <div className="mb-2">
        <span className="text-gray-500">const</span>{' '}
        <span className="text-blue-400">developer</span>{' '}
        <span className="text-gray-500">=</span>{' '}
        <span className="text-yellow-400">{'{'}</span>
      </div>
      
      <div className="ml-4 space-y-1">
        <div>
          <span className="text-red-400">name</span>:{' '}
          <span className="text-green-300">"Nahid Hasan"</span>,
        </div>
        <div>
          <span className="text-red-400">role</span>:{' '}
          <span className="text-green-300">"MERN Stack Developer"</span>,
        </div>
        <div>
          <span className="text-red-400">location</span>:{' '}
          <span className="text-green-300">"Dhaka, Bangladesh"</span>,
        </div>
        <div>
          <span className="text-red-400">contact</span>: <span className="text-yellow-400">{'{'}</span>
        </div>
        <div className="ml-4 space-y-1">
          <div>
            <span className="text-purple-400">email</span>:{' '}
            <span className="text-green-300">"nahidhasan.cse228@gmail.com"</span>,
          </div>
          <div>
            <span className="text-purple-400">phone</span>:{' '}
            <span className="text-green-300">"+880 1798 324 439"</span>
          </div>
        </div>
        <div><span className="text-yellow-400">{'}'}</span>,</div>
        <div>
          <span className="text-red-400">skills</span>:{' '}
          <span className="text-blue-300">["React", "Node.js", "MongoDB", "TypeScript"]</span>
        </div>
      </div>
      
      <div className="mt-2">
        <span className="text-yellow-400">{'}'}</span>;
      </div>
      
      <div className="mt-3 text-xs text-gray-400">
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/nahidn228/" className="hover:text-blue-400 transition-colors">
            // LinkedIn
          </a>
          <a href="https://github.com/nahidn228" className="hover:text-blue-400 transition-colors">
            // GitHub
          </a>
          <a href="https://x.com/nahidn228" className="hover:text-blue-400 transition-colors">
            // Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

// Main Component Showcase
const GmailSignatureShowcase: React.FC = () => {
  return (
    <div className="p-8 space-y-12 bg-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Professional Gmail Signatures</h1>
        <p className="text-gray-600">Choose your preferred style - All built with React + Tailwind CSS</p>
      </div>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Classic Professional ⭐ Recommended</h2>
          <div className="p-6 border rounded-lg bg-gray-50">
            <ClassicSignature />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Minimal Clean</h2>
          <div className="p-6 border rounded-lg bg-gray-50">
            <MinimalSignature />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Modern Card Style</h2>
          <div className="p-6 border rounded-lg bg-gray-50">
            <ModernCardSignature />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Compact Professional</h2>
          <div className="p-6 border rounded-lg bg-gray-50">
            <CompactSignature />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Developer-Themed 💻</h2>
          <div className="p-6 border rounded-lg bg-gray-900">
            <DeveloperSignature />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GmailSignatureShowcase;