import React, { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import * as htmlToImage from "html-to-image";
import { Download, Loader2, Sparkles } from "lucide-react";
import logo from "../../assets/MyPeeguLogo.png";
import { WORKSHOP_SOURCE } from "./workshopConfig";

export default function WorkshopFlyerGenerator() {
  const flyerRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const [heading, setHeading] = useState("MyPeegu Workshop Registration");
  const [subheading, setSubheading] = useState(
    "Scan to register for the upcoming MyPeegu workshop. Select your workshop date after scanning.",
  );

  const workshopLink = `https://mypeegu.com/registration?source=${encodeURIComponent(
    WORKSHOP_SOURCE,
  )}`;

  const handleDownload = async () => {
    if (!flyerRef.current) return;
    try {
      setIsDownloading(true);
      const dataUrl = await htmlToImage.toPng(flyerRef.current, {
        pixelRatio: 3,
        backgroundColor: "#ffffff",
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.download = `MyPeegu_${WORKSHOP_SOURCE}_Flyer.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Download failed:", err);
      alert("Image download mein problem aayi. Console check karein.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex flex-col items-center py-10 bg-gray-100 min-h-screen font-sans px-4">
      <div className="w-[600px] max-w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-5 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-gray-500 mb-1">
            Heading
          </label>
          <input
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#0066CC] outline-none"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-gray-500 mb-1">
            Subheading
          </label>
          <textarea
            value={subheading}
            onChange={(e) => setSubheading(e.target.value)}
            rows={2}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#0066CC] outline-none resize-none"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-gray-500 mb-1">
            QR link source (locked for Workshop flow)
          </label>
          <input
            value={WORKSHOP_SOURCE}
            readOnly
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-gray-50 text-gray-600 outline-none"
          />
          <p className="text-[11px] text-gray-400 mt-1 break-all">
            Link: {workshopLink}
          </p>
          {/* <p className="text-[11px] text-[#0066CC] mt-2 font-medium">
            Opens the Workshop-specific registration form (any date via calendar +
            short flow). Normal website QR still uses{" "}
            <code className="bg-blue-50 px-1 rounded">?source=Website</code>.
          </p> */}
        </div>
      </div>

      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="mb-8 flex items-center gap-2.5 bg-[#1A233A] hover:bg-[#2a3654] disabled:bg-gray-400 text-white px-8 py-3.5 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
      >
        {isDownloading ? (
          <>
            <Loader2 size={20} className="animate-spin" /> Generating HD Flyer...
          </>
        ) : (
          <>
            <Download size={20} /> Download Flyer{" "}
            <Sparkles size={18} className="text-yellow-400" />
          </>
        )}
      </button>

      <div
        id="flyer-canvas"
        ref={flyerRef}
        className="bg-white w-[500px] max-w-full relative shadow-2xl overflow-hidden flex flex-col items-center pt-10 pb-10 px-10"
        style={{ boxSizing: "border-box" }}
      >
        <div className="absolute top-10 left-10 flex flex-col gap-3 opacity-20">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1A233A]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#1A233A] ml-6" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#1A233A] ml-2" />
        </div>
        <div className="absolute top-10 right-10 flex flex-col gap-3 opacity-20 items-end">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1A233A]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#1A233A] mr-6" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#1A233A] mr-2" />
        </div>

        <div className="flex justify-center mb-6 w-full">
          <img
            src={logo}
            alt="MyPeegu Logo"
            className="h-24 w-auto object-contain"
          />
        </div>

        <div
          className="text-center w-full mb-4 flex flex-col items-center"
          style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
        >
          <h1 className="text-[26px] font-normal tracking-[0.01em] text-[#111111] leading-tight mb-2">
            {heading}
          </h1>
          <div className="w-16 h-[2px] bg-[#D9836E] mb-4" />
          <p
            className="text-[16px] tracking-[0.02em] leading-[1.7] text-[#333333] max-w-[350px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            {subheading}
          </p>
        </div>

        <div className="bg-white p-3 border border-gray-100 rounded-2xl shadow-sm">
          <QRCodeCanvas
            value={workshopLink}
            size={200}
            level="H"
            bgColor="#ffffff"
            fgColor="#111111"
            includeMargin={true}
          />
        </div>

        <p
          className="mt-4 text-[9px] tracking-[0.2em] text-gray-400 uppercase"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Scan to register · Workshop QR
        </p>

        <div className="mt-6 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4285F4]" />
          <div className="w-2 h-2 rounded-full bg-[#F4B400]" />
          <div className="w-2 h-2 rounded-full bg-[#EA4335]" />
        </div>
      </div>
    </div>
  );
}
