import { useNavigate } from "react-router-dom";
// import StarsIcon from '@mui/icons-material/Stars';
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function ProductCard({product}){
  const navigate = useNavigate();
  //exact color of the star according to fetched rating
  const renderStars = (rating) => {
  const roundedRating = Math.round(rating * 2) / 2;

  return [...Array(5)].map((_, index) => {
    const starValue = index + 1;

    if (roundedRating >= starValue) {
      return <StarIcon key={index} sx={{ fontSize: 18, color: "#facc15" }} />;
    }

    if (roundedRating >= starValue - 0.5) {
      return <StarHalfIcon key={index} sx={{ fontSize: 18, color: "#facc15" }} />;
    }

    return <StarBorderIcon key={index} sx={{ fontSize: 18, color: "#facc15" }} />;
  });
};
return(
    <div
  onClick={()=>navigate(`/product/${product.id}`)}
  className="border rounded-lg p-3 cursor-pointer hover:shadow-sm transition-all bg-white h-full flex flex-col justify-between"
>
<div className="h-32 flex items-center justify-center mb-3">
        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="h-full object-contain"
        />
      </div>
<h3 className="text-sm font-semibold text-gray-800 mb-1">
        {product?.title}
      </h3>

      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold">
          ${product?.price}
        </p>
        <div className="flex items-center">
  {renderStars(product?.rating)}
  <span className="text-gray-500 text-xs ml-1">
    ({product?.rating})
  </span>
</div>
      </div>
    </div>
  );
}