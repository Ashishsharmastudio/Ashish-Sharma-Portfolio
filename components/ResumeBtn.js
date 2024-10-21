// src/components/ResumeBtn.js
import React from 'react';

const ResumeBtn = () => {
  const handleResumeClick = () => {
    // Replace with the actual URL of your resume PDF
    window.open('/path/to/your/resume.pdf', '_blank');
  };

  return (
    <button 
      onClick={handleResumeClick} 
      className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-dark transition-colors"
    >
      View Resume
    </button>
  );
};

export default ResumeBtn;
