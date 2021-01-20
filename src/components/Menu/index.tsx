import { useState } from "react"
import axios from "axios"
import { StyledMenu, StyledCategory } from "./StyledMenu"
import { categories } from "../../data/categories"

type MenuType = {
  setArticles: React.Dispatch<React.SetStateAction<never[]>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

//get articles by category
const Menu = ({
  setArticles,
  setIsLoading,
  category,
  setCategory,
}: MenuType) => {
  const handleClick = async (value: string) => {
    setIsLoading((prevState) => !prevState)
    const res = await axios.get(
      `/.netlify/functions/getNewsByCategory?category=${value}`
    )
    setArticles(res.data.response)
    setIsLoading((prevState) => !prevState)
  }

  return (
    <StyledMenu>
      {categories.map(({ value, label }, index) => (
        <StyledCategory
          key={index}
          onClick={() => {
            handleClick(value)
            setCategory(value)
          }}
          isActive={category === value}
        >
          {label}
        </StyledCategory>
      ))}
    </StyledMenu>
  )
}

export default Menu
