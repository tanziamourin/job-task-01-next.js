"use client";
import Image from "next/image";

export default function ReviewCard({ name, avatar, rating, comment }) {
  return (
    <div className="flex flex-col items-center p-16 text-center bg-white shadow-lg dark:bg-gray-800 rounded-3xl">
      <div className="relative w-16 h-16 mb-4">
        <Image
          src={avatar || "/placeholder-avatar.png"}
          alt={name}
          fill
          className="object-cover rounded-full"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{name}</h3>
      <p className="mb-2 text-yellow-400">{'★'.repeat(rating) + '☆'.repeat(5 - rating)}</p>
      <p className="text-gray-600 dark:text-gray-300">{comment}</p>
    </div>
  );
}
