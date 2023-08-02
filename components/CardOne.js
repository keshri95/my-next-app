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
import { Button, Box, Link as MuiLink } from "@mui/material";
import Link from "next/link";

const CardWrapper = styled(Card)(({ theme }) => ({
  position: "relative",
  maxWidth: 345,
  borderRadius: theme.spacing(2), // Add border-radius here
  overflow: "hidden", // Hide overflow for the image to respect the border-radius
}));

const FavoriteButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  color: "red",
  borderRadius: "50%", // Add border-radius to make it a circle
  backgroundColor: "rgba(255, 255, 255, 0.9)", // Add a background color to the circle
  "& svg": {
    width: "1.5rem", // Adjust the size of the favorite icon
    height: "1.5rem",
  },
}));

const StarIconsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& svg": {
    marginRight: theme.spacing(0.5),
    color: "blue",
  },
}));

const ColumnCenterBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });

const CardOne = ({ product }) => {
  const { thumbnail, id, rating, price, title, discountPercentage } = product;
  console.log(product);

  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

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
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
        <StarIconsWrapper>
          {Array.from({ length: 5 }, (_, index) => (
            <React.Fragment key={index}>
              {index < Math.floor(rating) ? <StarIcon /> : <StarBorderIcon />}
            </React.Fragment>
          ))}
          <Typography>{Math.ceil(discountPercentage)} Reviews</Typography>
        </StarIconsWrapper>
      </CardContent>

      <Box textAlign="center" padding={2}>
        <ColumnCenterBox>
          <Button variant="contained">Add to Cart</Button>
          <Link href="/product">
            <a style={{ textDecoration: "none", color: "inherit" }}>
              Quick shop
            </a>
          </Link>
        </ColumnCenterBox>
      </Box>
    </CardWrapper>
  );
};

export default CardOne;
