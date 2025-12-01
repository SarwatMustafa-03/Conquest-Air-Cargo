import React from "react";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-10 px-6  border-t border-white/10">
      
      

      {/* Bottom Copy */}
      <div className="text-center text-sm opacity-60 mt-8">
        © {new Date().getFullYear()} Conquest Air Cargo — All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
