"use client";

import { useState } from "react";

export default function ParityChecker() {
  const [number, setNumber] = useState("");

  const isEven = number !== "" && parseInt(number) % 2 === 0;
  const isOdd = number !== "" && parseInt(number) % 2 !== 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Kiểm tra Chẵn/Lẻ</h1>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Nhập một số..."
          className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
        />
        <div className="text-lg font-medium text-center">
          {number === "" && <p className="text-gray-500">Vui lòng nhập số</p>}
          {isEven && <p className="text-green-600">Đây là số Chẵn</p>}
          {isOdd && <p className="text-blue-600">Đây là số Lẻ</p>}
        </div>
      </div>
    </div>
  );
}