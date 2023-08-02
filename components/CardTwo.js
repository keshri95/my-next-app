import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Link from "next/link";

const CardWrapper = styled(Card)(({ theme }) => ({
  position: "relative",
  maxWidth: 345,
  borderRadius: theme.spacing(2), 
  overflow: "hidden", 
}));



const StarIconsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& svg": {
    marginRight: theme.spacing(0.5),
    color: "blue",
  },
}));



const CardTwo = ({ product }) => {
  const { thumbnail, id, rating, price, title, discountPercentage } = product;

 


  console.log(product);
  return (
    <CardWrapper key={id}>
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
          <Typography>({Math.ceil(discountPercentage)})</Typography>
        </StarIconsWrapper>
      </CardContent>
    </CardWrapper>
  );
};

export default CardTwo;
