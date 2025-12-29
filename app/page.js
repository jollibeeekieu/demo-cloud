"use client";

import { useState } from "react";

export default function CloudCMC() {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050b1f] via-[#0b1a3a] to-[#020617] text-white font-sans">
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/10">
        {/* Header */}
        <h1 className="text-4xl font-semibold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Cloud Computing
        </h1>
        <p className="text-center text-gray-300 mb-10">
          Công nghệ nền tảng cho giáo dục chuyển đổi số hiện đại.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("intro")}
            className={`px-6 py-3 rounded-xl transition ${
              activeTab === "intro"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            Giới thiệu
          </button>

          <button
            onClick={() => setActiveTab("models")}
            className={`px-6 py-3 rounded-xl transition ${
              activeTab === "models"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            Mô hình Cloud
          </button>

          <button
            onClick={() => setActiveTab("cmc")}
            className={`px-6 py-3 rounded-xl transition ${
              activeTab === "cmc"
                ? "bg-gradient-to-r from-purple-500 to-indigo-500"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            Ứng dụng tại ĐH CMC
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === "intro" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-cyan-400">Cloud Computing là gì?</h2>
              <p className="text-gray-300 leading-relaxed">
                Cloud Computing (Điện toán đám mây) là mô hình cung cấp tài
                nguyên CNTT như máy chủ, lưu trữ, cơ sở dữ liệu và phần mềm
                thông qua Internet.
              </p>
            </div>
          )}

          {activeTab === "models" && (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#0f172a] p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">IaaS</h3>
                <p className="text-gray-300 text-sm">
                  Cung cấp hạ tầng như máy chủ ảo, mạng và lưu trữ.
                </p>
              </div>

              <div className="bg-[#0f172a] p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">PaaS</h3>
                <p className="text-gray-300 text-sm">
                  Nền tảng cho lập trình, phát triển và triển khai ứng dụng.
                </p>
              </div>

              <div className="bg-[#0f172a] p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">SaaS</h3>
                <p className="text-gray-300 text-sm">
                  Phần mềm hoàn chỉnh sử dụng trực tiếp qua Internet.
                </p>
              </div>
            </div>
          )}

          {activeTab === "cmc" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-purple-400">
                Ứng dụng Cloud Computing tại Đại học CMC
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#0f172a] p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                    Học tập trực tuyến
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Hệ thống LMS giúp sinh viên học online, nộp bài và làm
                    bài kiểm tra mọi lúc mọi nơi.
                  </p>
                </div>

                <div className="bg-[#0f172a] p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                    Thực hành CNTT
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Sinh viên sử dụng máy chủ ảo, môi trường cloud để
                    thực hành giống doanh nghiệp.
                  </p>
                </div>

                <div className="bg-[#0f172a] p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                    Lưu trữ dữ liệu
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Giáo trình, bài giảng và tài liệu được lưu trữ an toàn
                    trên nền tảng cloud.
                  </p>
                </div>

                <div className="bg-[#0f172a] p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                    Quản lý đào tạo
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Hệ thống đăng ký môn học, quản lý sinh viên hoạt động
                    ổn định và linh hoạt.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
