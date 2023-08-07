import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Button, Box } from "@mui/material";
import NextLink from 'next/link';
import Link from "@mui/material/Link";

const CardWrapper = styled(Card)(({ theme }) => ({
  position: "relative",
  maxWidth: 345,
  borderRadius: theme.spacing(2),
  overflow: "hidden",
  height: "100%", 
}));

const FavoriteButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  color: "red",
  borderRadius: "50%", 
  backgroundColor: "rgba(255, 255, 255, 0.9)", 
  "& svg": {
    width: "1.5rem", 
    height: "1.5rem",
  },
}));

const StarIconsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& svg": {
    marginRight: theme.spacing(0.1),
    color: "blue",
  },
}));

const ColumnCenterBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap:"5px",
  });

const CardOne = ({ product, theme={theme} }) => {
  const { thumbnail, id, rating, price, title, discountPercentage } = product;

  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };
  console.log(theme)

  return (
    <CardWrapper key={id}>
      <FavoriteButton
        aria-label="add to favorites"
        onClick={handleFavoriteClick}
      >
        <FavoriteIcon color={isFavorite ? "secondary" : "action"} />
      </FavoriteButton>
   
      <CardMedia component="img" height="200" image={thumbnail} alt={title} />
      <CardContent>
      <Typography color={theme.textColor ? 'purple' : 'text.dark'} variant="solid" fontFamily={theme.fontFamily ? "Roboto, sans-serif" : "Poppins"}  level="title-lg">
          {title}
        </Typography>
        <Typography variant="subtitle1" color={theme.textColor ? 'purple' : 'text.dark'} fontFamily={theme.fontFamily ? "Roboto, sans-serif" : "Poppins"}>
          ${price}
        </Typography>
        <StarIconsWrapper>
          {Array.from({ length: 5 }, (_, index) => (
            <React.Fragment key={index}>
              {index < Math.floor(rating) ? <StarIcon /> : <StarBorderIcon />}
            </React.Fragment>
          ))}
          <Typography variant="subtitle2">{Math.ceil(discountPercentage)} Reviews</Typography>
        </StarIconsWrapper>
      </CardContent>

      <Box textAlign="center" padding={2}>
        <ColumnCenterBox>
          <Button variant="contained">Add to Cart</Button>
          <Link href="/product" underline="always">
          <NextLink href="/docs" passHref>
              <Link style={{ color:"blue"}}>Quick shop</Link>
            </NextLink>
           
          </Link>
        </ColumnCenterBox>
      </Box>
    </CardWrapper>
  );
};

export default CardOne;
