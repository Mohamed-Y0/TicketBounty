"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";

type SearchInputProps = {
  placeholder: string;
};

const SearchInput = ({ placeholder }: SearchInputProps) => {
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const params = new URLSearchParams(searchParam);

      if (value) params.set("search", value);
      else params.delete("search");

      replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    250,
  );

  return <Input placeholder={placeholder} onChange={handleSearch} />;
};

export default SearchInput;
