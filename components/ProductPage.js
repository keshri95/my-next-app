import CardOne from './CardOne';
import CardTwo from './CardTwo';
import { Grid, Container } from '@mui/material';
import { useTheme } from '../components/ThemeContext';

const Product = ({ products }) => {
  const { theme } = useTheme();
  const selectedCard = theme.selectedCard || 'Card1';
  const scrollDirection = theme.scrollDirection || 'vertical';

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.backgroundColor === 'true' ? 'white' : '',
    color: theme.textColor === 'true' ? 'black' : '',
    fontFamily: theme.fontFamily === 'true' ? 'Arial, sans-serif' : '',
  };

  return (
    <div>
      {scrollDirection === 'horizontal' ? (
        <Container className="horizontal-scroll" style={containerStyle}>
          <div style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'scroll' }}>
            {products?.map((product, id) =>
              selectedCard === 'Card1' ? (
                <div key={id} style={{ minWidth: '345px', padding: '1rem' }}>
                  <CardOne product={product} />
                </div>
              ) : (
                <div key={id} style={{ minWidth: '345px', padding: '1rem' }}>
                  <CardTwo product={product} />
                </div>
              )
            )}
          </div>
        </Container>
      ) : (
        <Container className="vertical-scroll" style={containerStyle}>
          <Grid container spacing={2}>
            {products?.map((product, id) =>
              selectedCard === 'Card1' ? (
                <Grid key={id} item xs={12} sm={6} md={4} lg={3} sx={{ padding: '1rem' }}>
                  <CardOne product={product} />
                </Grid>
              ) : (
                <Grid key={id} item xs={12} sm={6} md={4} lg={3} sx={{ padding: '1rem' }}>
                  <CardTwo product={product} />
                </Grid>
              )
            )}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default Product;
