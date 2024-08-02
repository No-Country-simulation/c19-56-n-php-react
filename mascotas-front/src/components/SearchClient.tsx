import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { SearchIcon } from "@/icons"
import { useDebounce } from "@/hooks/useDebounce"
// import useDebounce from "@/hooks/useDebounce"

interface SearchBarProps {
  placeholder?: string;
  onSearch: (search: string) => void;
}

export const SearchClient: React.FC<SearchBarProps> = ({
  placeholder = "Buscar por Mascotas",
  onSearch,
}) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(inputValue); 
    }, 1500);

    return () => clearTimeout(timer);
  }, [inputValue, onSearch]);

  return (
    <div className="max-w-4xl w-full px-4 md:px-0">
      <form className="relative">
        <Input
          type="search"
          placeholder={placeholder}
          className="w-full rounded-full bg-white/80 backdrop-blur-sm px-6 py-6 pr-16 text-sm outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        
        >
          <SearchIcon className="h-5 w-5" />
        </Button>
      </form>
    </div>
  )
}

export default SearchClient
