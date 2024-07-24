import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { SearchIcon } from "@/icons"
import useDebounce from "@/hooks/useDebounce"

const SearchClient = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("Searching for:", debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])

  return (
    <div className="max-w-4xl w-full px-4 md:px-0">
      <form className="relative">
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-full bg-white/80 backdrop-blur-sm px-6 py-6 pr-16 text-sm outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          type="submit"
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={() => console.log("Searching for:", debouncedSearchTerm)}
        >
          <SearchIcon className="h-5 w-5" />
        </Button>
      </form>
    </div>
  )
}

export default SearchClient
