import StarIcon from "@mui/icons-material/Star"
import { Box, Button, Typography } from "@mui/material"
import { ICustomAPIResponse } from "models/product"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "react-use-cart"
import { borderColor } from "styles/config"

interface Props {
  data: ICustomAPIResponse
}

const ProductListRow = ({ data }: Props) => {
  const { addItem, inCart } = useCart()
  const [isHovered, setIsHovered] = useState(false)
  const newData = { ...data, id: data.productId }

  const convertToPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(data.price)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Box border={1} borderColor={borderColor} p={2}>
      <Link
        to={`/detail/${data.productId}`}
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={handleClick}
      >
        <Box height={{ xs: 150, md: 210 }} p={1}>
          <img
            src={data.photoImage}
            alt="..."
            width="100%"
            height="100%"
            style={{
              transition: "all 0.3s",
              position: "relative",
              top: isHovered ? -5 : 0,
              objectFit: "cover",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Box>

        <Box mt={2}>
          <Typography
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            overflow="hidden"
          >
            {data.title}
          </Typography>
          <Typography fontWeight={500} color="error">
            {convertToPrice}
          </Typography>

          <Box display="flex" alignItems="center" mt={0.5}>
            {Array(data.star)
              .fill(0)
              .map((_, index) => (
                <StarIcon
                  key={index}
                  fontSize="small"
                  sx={{ color: "orange" }}
                />
              ))}
            <Typography
              fontSize={13}
              color="gray"
              ml={1}
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              overflow="hidden"
            >
              {data.rateCount + " đánh giá"}
            </Typography>
          </Box>
        </Box>

        {data.promotion.name && (
          <Typography
            bgcolor={
              data.promotion.name === "Sale"
                ? "#ea1b23"
                : "" || data.promotion.name === "New"
                ? "#00a650"
                : "" || data.promotion.name === "Trả góp"
                ? "#f7941d"
                : ""
            }
            position="absolute"
            top={10}
            right={10}
            width="fit-content"
            p="12px 8px"
            borderRadius="50%"
            color="white"
            fontWeight={600}
            sx={{ textShadow: "0 0 2px #fafafa" }}
          >
            {data.promotion.name}
          </Typography>
        )}
      </Link>

      <Button
        variant="outlined"
        sx={{ mt: 2 }}
        onClick={() => addItem(newData)}
        disabled={inCart(data.productId) ? true : false}
      >
        {inCart(data.productId) ? "Đã thêm vào giỏ" : "Thêm vào giỏ hàng"}
      </Button>
    </Box>
  )
}

export default ProductListRow