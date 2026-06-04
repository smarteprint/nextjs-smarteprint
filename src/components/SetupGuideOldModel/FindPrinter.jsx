"use client";
import SEO from '../common/SEO';
import React, { useState } from 'react'
import "./findprinter.css";
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';

function FindPrinter() {

  const [action, setAction] = useState("");
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!action || !input.trim()) return;
    router.push("/find-printer/smart-install");
  };
  return (
    <>
      <SEO title="Find Your HP Printer" description="Easily find and identify your HP printer model for setup and troubleshooting." canonical="/find-printer" />
      <div className='bg-white'>
        {/* HERO SECTION */}
        <section className="chat-assist-hero ">
          <div className="chat-assist-text">
            <h2>We're here to help you set up your printer</h2>
            <p>
              Let's connect your printer to a Wi-Fi or wired network or to a computer using a USB cable.
              First, tell us your printer model.
            </p>
          </div>
          <div className="chat-assist-img">
            <img src="/assets/setupguide/Printer_Setup_Landing.jpg" alt="Printer Setup Help" />
          </div>
        </section>
        {/* ACTION SECTION */}
        <section className="chat-assist-action">
          <div className="chat-assist-action-left">
            <form className="printer-action-form">
              {/* RADIO GROUP */}
              <div className="radio-group">
                <div style={{ marginBottom: 18, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0 }}>
                  <label style={{ display: 'flex', alignItems: 'center', fontWeight: 400, color: '#222', fontSize: '1.08rem', marginBottom: 2, gap: 8 }}>
                    <input type="radio" name="printer-action" value="setup" style={{ accentColor: '#1976d2', marginRight: 8 }} onChange={(e) => setAction(e.target.value)} />
                    Unpack, Setup New Printer
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', fontWeight: 400, color: '#222', fontSize: '1.08rem', marginBottom: 2, gap: 8 }}>
                    <input type="radio" name="printer-action" value="troubleshoot" style={{ accentColor: '#1976d2', marginRight: 8 }} onChange={(e) => setAction(e.target.value)} />
                    Troubleshoot Printer Issues
                  </label>
                </div>
              </div>
              {/* INPUT */}
              <div className="input-group">
                <label htmlFor="printer-id">
                  Enter your serial number, product number or product name
                </label>
                <input type="text" id="printer-id" name="printer-id" placeholder="e.g. HP1234, DeskJet 2700" required />
              </div>
              {/* BUTTON */}
              <button type="submit" onClick={handleSubmit} className="search-btn">Search</button>
            </form>
          </div>
          <div className="chat-assist-action-img">
            <img src="/assets/setupguide/printer-1.jpg" alt="Printer Action" />
          </div>
        </section>
        {/* BOTTOM SECTION */}
        <section className="chat-assist-bottom">
          <div className="chat-assist-bottom-left">
            <p>
              We’ve made it easy to download printer software. Enter your product name and we’ll get you
              the right drivers and setup tools for Windows, MacOS, iOS, and Android.
            </p>
          </div>
        </section>
        {/* JAVASCRIPT */}
      </div>

   
    </>
  )
}

export default FindPrinter

