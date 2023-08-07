import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const CardWrapper = styled(Card)(({ theme }) => ({
  position: "relative",
  maxWidth: 345,
  overflow: "hidden",
  height: "100%",
}));

const CardJustify = styled(CardContent)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  color: "black",
  fontWeight: "bold",
  lineHeight: "2",
}));

const StarIconsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& svg": {
    marginRight: theme.spacing(0.5),
    color: "blue",
  },
}));

const CardTwo = ({ product, theme }) => {
  const { thumbnail, id, rating, price, title, discountPercentage } = product;

  const titleFont = title.toUpperCase();
  console.log(titleFont);

  console.log(product);
  return (
    <CardWrapper key={id}>
      <CardMedia component="img" height="200" image={thumbnail} alt={title} />
      <CardContent>
        <CardJustify>
        <Typography variant="solid" color={theme.textColor ? 'purple' : 'text.dark'} fontFamily={theme.fontFamily ? "Roboto, sans-serif" : "Poppins"}>
            {titleFont}
          </Typography>
          <Typography variant="solid" color={theme.textColor ? 'purple' : 'text.dark'} fontFamily={theme.fontFamily ? "Roboto, sans-serif" : "Poppins"}>
            ${price}
          </Typography>
        </CardJustify>
        <StarIconsWrapper>
          {Array.from({ length: 5 }, (_, index) => (
            <React.Fragment key={index}>
              {index < Math.floor(rating) ? <StarIcon /> : <StarBorderIcon />}
            </React.Fragment>
          ))}
          <Typography>({Math.ceil(discountPercentage)})</Typography>
        </StarIconsWrapper>
      </CardContent>
    </CardWrapper>
  );
};

export default CardTwo;
