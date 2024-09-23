import { formatCurrency, getImagePath } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import AddProductButton from "./AddProductButton";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const imagePath = getImagePath(product.image);

  return (
    <div className=" border  bg-white h-full max-lg:mx-auto flex flex-col ">
      <Image
        src={imagePath}
        alt={`Imagen platillo ${product.name}`}
        width={400}
        height={500}
      />
      <div className=" p-5 flex flex-col flex-1 max-w-[400px]">
        <div
          className=" flex flex-col h-full 
        justify-between"
        >
          <h3 className=" text-2xl font-bold line-clamp-4">{product.name}</h3>
          <p className=" mt-5 font-black text-4xl text-amber-500">
            {formatCurrency(product.price)}
          </p>
        </div>
        <AddProductButton product={product} />
      </div>
    </div>
  );
}
