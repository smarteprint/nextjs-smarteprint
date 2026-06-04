import SEO from '../common/SEO';
import React from "react";

const HpSmartInstall = () => (
  <>
    <SEO title="HP Smart Install" description="Install HP Smart software to connect and manage your HP printer easily." canonical="/find-printer/smart-install" />
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto py-16 px-4 bg-white rounded-xl shadow-md">
    <div className="flex-1 flex flex-col items-center md:items-start">
      <img src="/assets/setupguide/printeroffline.svg" alt="HP Logo" className="w-20 mb-6 rounded-xl shadow-lg" />
      <h1 className="text-3xl font-bold text-blue-700 mb-4">HP Smart</h1>
      <button className="bg-blue-600 text-white rounded px-8 py-2 font-semibold mb-4 hover:bg-blue-700 transition">Install Now</button>
      <p className="text-base text-gray-700 mb-2">Connects seamlessly with your printer</p>
    </div>
    <div className="flex-1 text-center">
      <img src="/assets/setupguide/hp-smart.webp" alt="HP Smart App" className="w-full max-w-xs rounded-xl shadow-lg mx-auto" />
    </div>
    <section className="w-full flex flex-col md:flex-row gap-8 mt-8">
      <div className="flex-1">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Print, scan, and share files using Smart with your printer. Smart makes it easy to get started and keeps you going with features like Print Anywhere or Mobile Fax.</h2>
          <p className="text-sm text-gray-600 mb-2"><b>Note:</b> Disconnect from a Virtual Private Network (VPN) connection before downloading.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Start with a hassle-free setup, then print, scan, copy, and share files directly from your computer.</li>
            <li>Manage or print to your printer using any network connection.</li>
            <li>Order supplies, get support, and manage your account straight from the app.</li>
            <li>Create high-quality scans and improve them by cropping, adding filters/text, or adjusting settings.</li>
            <li>Send secure faxes from the app with Mobile Fax.</li>
            <li>Be more productive with customizable one-touch Shortcuts (formerly Smart Tasks).</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img src="/assets/setupguide/hp-smart.webp" alt="HP Smart App" className="w-full max-w-xs rounded-xl shadow-lg" />
      </div>
    </section>
    </div>
  </>
);

export default HpSmartInstall;
