/* eslint-disable react-hooks/rules-of-hooks */
import Input from "@/shared/ui/Input/Input";
import debounce from "lodash.debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";

const Search = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [value, setValue] = useState(searchParams.get("search")?.toString());
	const handleSearch = (term: string) => {
		setValue(term);
		const debouncedSearch = debounce(() => {
			const params = new URLSearchParams(searchParams);
			if (term) {
				params.set("search", term);
			} else {
				params.delete("search");
			}
			replace(`${pathname}?${params.toString()}`);
		}, 500);
		debouncedSearch();
	};
	
  return (
    <>
      {pathname.includes("/blog") && (
        <div>
          <Input
            placeholder="Поиск..."
            onChange={(e: any) => {
              handleSearch(e.target.value);
            }}
            value={value}
          />
        </div>
      )}
    </>
  );
};

export default Search;
