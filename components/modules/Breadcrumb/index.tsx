"use client";

type BreadcrumbsProps = {
  name: string;
  category: string;
};

/* 
  Not sue how it should work
  For now simple display of the product category and name
*/
export default function Breadcrumbs({ name, category }: BreadcrumbsProps) {
  return (
    <nav className="text-sm mt-10">
      <ul className="flex gap-2 text-headers">
        <li className="opacity-40">{category}</li>
        <li className="font-semibold">{`/ ${name}`}</li>
      </ul>
    </nav>
  );
}
