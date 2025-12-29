import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CloudUpload, Server, MousePointerClick, Image as ImageIcon, Info } from "lucide-react";

export default function CloudVercelIntro() {
  const [step, setStep] = useState(0);
  const [showTip, setShowTip] = useState(false);

  const steps = [
    {
      title: "🧩 Bước 1: Chuẩn bị project",
      description: "Khởi tạo và chuẩn bị môi trường cho ứng dụng Next.js.",
      items: [
        "Mở VS Code",
        "Mở Terminal trong VS Code",
        "Chạy lệnh theo hướng dẫn",
        "Quan sát kết quả trực tiếp"
      ],
      image: "/images/step1-vscode-nextjs.png",
      tip: "Luôn chạy thử local trước khi deploy nhé!"
    },
    {
      title: "🐙 Bước 2: Đẩy code lên GitHub",
      description: "Lưu trữ source code trên cloud để Vercel có thể truy cập.",
      items: [
        "Mở VS Code",
        "Mở Terminal trong VS Code",
        "Chạy lệnh theo hướng dẫn",
        "Quan sát kết quả trực tiếp"
      ],
      image: "https://docs.github.com/assets/images/help/repository/create-repository-name.png",
      tip: "Tên repo rõ ràng sẽ giúp bạn quản lý project tốt hơn."
    },
    {
      title: "☁️ Bước 3: Deploy lên Vercel",
      description: "Đưa website của bạn lên Internet chỉ với vài cú click.",
      items: [
        "Mở VS Code",
        "Mở Terminal trong VS Code",
        "Chạy lệnh theo hướng dẫn",
        "Quan sát kết quả trực tiếp"
      ],
      image: "/images/step3-vercel-deploy.png",
      tip: "Mỗi lần push code mới, Vercel sẽ tự động deploy lại."
    }
  ];

  const current = steps[step];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white p-6">
      <header className="max-w-5xl mx-auto text-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-4"
        >
          🚀 Deploy Next.js lên Vercel & Cloud Fun Time ☁️
        </motion.h1>
        <p className="text-gray-600 mb-6">
          Học cách đưa website lên mây với ví dụ trực quan từ VS Code → GitHub → Vercel
        </p>

        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-5">
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">
                <Server className="w-5 h-5 text-indigo-500" /> Vercel là gì?
              </h2>
              <p className="text-gray-600 mb-2">
                Vercel là nền tảng <b>PaaS</b> (Platform as a Service) giúp bạn deploy các ứng dụng Frontend như Next.js một cách nhanh chóng.
              </p>
              <p className="text-gray-600 mb-3">
                Bạn chỉ cần đẩy code lên GitHub, Vercel sẽ tự động build, deploy và scale website cho bạn.
              </p>
              <a
                href="https://vercel.com"
                target="_blank"
                className="text-sky-600 underline text-sm"
              >
                🔗 Trang chủ Vercel
              </a>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-5">
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">
                <CloudUpload className="w-5 h-5 text-sky-500" /> Điện toán đám mây
              </h2>
              <p className="text-gray-600 mb-2">
                Điện toán đám mây cho phép bạn sử dụng tài nguyên (server, storage, hosting) thông qua Internet mà không cần tự quản lý phần cứng.
              </p>
              <p className="text-gray-600 mb-3">
                Vercel là một ví dụ thực tế cho việc áp dụng cloud computing trong phát triển web hiện đại.
              </p>
              <a
                href="https://github.com"
                target="_blank"
                className="text-sky-600 underline text-sm"
              >
                🔗 GitHub – nơi lưu trữ code
              </a>
            </CardContent>
          </Card>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Step Controller */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">📍 Các bước</h2>
            <div className="flex flex-col gap-2">
              {steps.map((s, index) => (
                <Button
                  key={index}
                  variant={index === step ? "default" : "outline"}
                  onClick={() => {
                    setStep(index);
                    setShowTip(false);
                  }}
                >
                  {s.title}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Step Content */}
        <Card className="md:col-span-2 rounded-2xl shadow-md">
          <CardContent className="p-6">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-xl font-semibold mb-2">{current.title}</h2>
              <p className="text-gray-600 mb-4">{current.description}</p>

              <img
                src={current.image}
                alt="step illustration"
                className="rounded-xl mb-4 border"
              />

              <ul className="list-disc list-inside text-gray-700 mb-4">
                {current.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="flex gap-2 flex-wrap">
                <Button onClick={() => setShowTip(!showTip)} variant="secondary">
                  <Info className="w-4 h-4 mr-1" /> Mẹo nhỏ
                </Button>
                <Button variant="outline">
                  <ImageIcon className="w-4 h-4 mr-1" /> Xem hình lớn
                </Button>
                <Button variant="outline">
                  <CloudUpload className="w-4 h-4 mr-1" /> Thử deploy
                </Button>
              </div>

              {showTip && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 p-3 bg-sky-50 rounded-xl text-sky-700"
                >
                  💡 {current.tip}
                </motion.div>
              )}
            </motion.div>
          </CardContent>
        </Card>
      </main>

      <footer className="max-w-4xl mx-auto mt-10 text-center text-gray-500">
        <div className="flex justify-center items-center gap-2">
          <MousePointerClick className="w-4 h-4" />
          <span>Nhấn các nút, đổi bước và khám phá cloud theo cách trực quan 😄</span>
        </div>
      </footer>
    </div>
  );
}
