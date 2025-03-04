import {
  IconStarFilled,
  IconStarHalfFilled,
  IconStar,
} from "@tabler/icons-react";

interface ProductRatingProps {
  rating: number;
  reviewCount?: number;
}

export default function ProductRating({
  rating,
  reviewCount,
}: ProductRatingProps) {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 mt-1">
      {Array.from({ length: fullStars }).map((_, i) => (
        <IconStarFilled
          key={`full-${i}`}
          size={20}
          className="text-[#FFC41F]"
        />
      ))}

      {hasHalfStar && (
        <IconStarHalfFilled size={20} className="text-[#FFC41F]" />
      )}

      {Array.from({ length: emptyStars }).map((_, i) => (
        <IconStar key={`empty-${i}`} size={20} className="text-gray-300" />
      ))}

      <span className="text-headers text-base ">
        {rating} / 5.0 <span className="text-cool-gray">({reviewCount})</span>
      </span>
    </div>
  );
}
