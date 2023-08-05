import CardOne from './CardOne';
import CardTwo from './CardTwo';
import { Grid } from '@mui/material';
import { useTheme } from '../components/ThemeContext';


const Product = ({ products }) => {
  const { theme } = useTheme();
  const selectedCard = theme.selectedCard || 'Card1';
  const scrollDirection = theme.scrollDirection || 'vertical';

  const containerStyle = {
    display: 'flex',
    flexDirection: scrollDirection === 'horizontal' ? 'row' : 'column',
    overflowX: scrollDirection === 'horizontal' ? 'auto' : 'hidden',
    overflowY: scrollDirection === 'vertical' ? 'auto' : 'hidden',
    backgroundColor: theme.backgroundColor === 'true' ? 'white' : '',
    color: theme.textColor === 'true' ? 'black' : '',
    fontFamily: theme.fontFamily === 'true' ? 'Arial, sans-serif' : '',
    // height: '100vh',
  };

  return (
    <div>

      <div style={containerStyle}>
        {/* <Grid container spacing={2}> */}
        
          {products?.map((product, id) =>
            selectedCard === 'Card1' ? (
              <Grid container key={id} item xs={12} sm={6} md={4} lg={3} sx={{ padding: '1rem' }}>
                <CardOne product={product} />
              </Grid>
            ) : (
              <Grid container key={id} item xs={12} sm={6} md={4} lg={3} sx={{ padding: '1rem' }}>
                <CardTwo key={id} product={product} />
              </Grid>
            )
          )}
        {/* </Grid> */}
      </div>
    </div>

  );
};

export default Product;
