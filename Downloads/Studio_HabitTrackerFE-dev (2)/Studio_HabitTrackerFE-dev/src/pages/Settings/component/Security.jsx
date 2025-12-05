import React, { useState } from "react";

export default function Security() {
  const [twoFA, setTwoFA] = useState(true);
  const [limitSession, setLimitSession] = useState(true);

  return (
    <>
      {/* ================= ITEM 1 - TWO FACTOR ================= */}
      <div className="flex items-start justify-between w-full mb-6">
        {/* LEFT SECTION */}
        <div className="flex gap-3">
          {/* ICON */}
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_902_9569)">
                <path d="M11 0.916504L2.75 4.58317V10.0832C2.75 15.1707 6.27 19.9282 11 21.0832C15.73 19.9282 19.25 15.1707 19.25 10.0832V4.58317L11 0.916504ZM11 10.9907H17.4167C16.9308 14.7673 14.41 18.1315 11 19.1857V10.9998H4.58333V5.77484L11 2.924V10.9907Z" fill="#3B3F46"/>
                </g>
                <defs><clipPath id="clip0_902_9569"><rect width="22" height="22" fill="white"/></clipPath></defs>
                </svg>
              `,
            }}
          />

          {/* TEXT */}
          <div>
            <h3 className="text-[16px] font-semibold text-[#3B3F46] leading-[140%]">
              Two-Factor Authentication
            </h3>
            <p className="text-[16px] text-[#3B3F46] leading-[140%]">
              Wajibkan 2FA untuk semua akun Admin
            </p>
          </div>
        </div>

        {/* TOGGLE */}
        <button
          onClick={() => setTwoFA(!twoFA)}
          className={`w-[60px] h-[30px] rounded-full flex items-center transition-all duration-300 ${
            twoFA ? "bg-[#136C34] justify-end" : "bg-gray-300 justify-start"
          }`}
        >
          <span className="w-[26px] h-[26px] bg-white rounded-full m-[2px] shadow"></span>
        </button>
      </div>

      {/* ================ GARIS PEMBATAS ================ */}
      <div className="w-full border border-[#9CA1AA] mb-6"></div>

      {/* ================= ITEM 2 - LIMIT SESSION ================= */}
      <div className="flex items-start justify-between w-full">
        {/* LEFT SECTION */}
        <div className="flex gap-3">
          {/* ICON */}
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_902_9581)">
                <path d="M16.5 20.1668L16.4908 14.6668L12.8333 11.0002L16.4908 7.32433L16.5 1.8335H5.5V7.3335L9.16667 11.0002L5.5 14.6577V20.1668H16.5ZM7.33333 6.87516V3.66683H14.6667V6.87516L11 10.5418L7.33333 6.87516Z" fill="#3B3F46"/>
                </g>
                <defs><clipPath id="clip0_902_9581"><rect width="22" height="22" fill="white"/></clipPath></defs>
                </svg>
              `,
            }}
          />

          {/* TEXT */}
          <div>
            <h3 className="text-[16px] font-semibold text-[#3B3F46] leading-[140%]">
              Batasi Sesi Login
            </h3>
            <p className="text-[16px] text-[#3B3F46] leading-[140%]">
              Logout otomatis pengguna setelah 1 jam tidak aktif.
            </p>
          </div>
        </div>

        {/* TOGGLE */}
        <button
          onClick={() => setLimitSession(!limitSession)}
          className={`w-[60px] h-[30px] rounded-full flex items-center transition-all duration-300 ${
            limitSession
              ? "bg-[#99E4B5] justify-end"
              : "bg-gray-300 justify-start"
          }`}
        >
          <span className="w-[26px] h-[26px] bg-white rounded-full m-[2px] shadow"></span>
        </button>
      </div>
    </>
  );
}
