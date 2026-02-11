import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: '#f1fdd783',
  ...theme.typography.body2,
  fontSize: '24px',
  fontWeight: '700',
  fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
    width: '100%',
  }),
}));

export default function HowItWorks() {
  return (
    <Box sx={{ 
        px: 2,
        mx: 'auto',
        backgroundColor: '#f1fdd7b5',
        pb: 8,
    }}>

    <Typography variant="h4" align="center" sx={{ py: 2, fontSize: '30px', fontWeight: 1000, fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif", backgroundColor: '#f1fdd783', color: '#2f3b2f' }}>
      HOW LEANLAB WORKS
    </Typography>
        
      <Grid 
        container spacing={{ xs: 2, md: 3 }}
        justifyContent={'center'}
        bgcolor={'#f1fdd783'}
        >
        <Grid item xs={12} sm={4}>
            <Typography variant="h6" align="center" 
                sx={{ fontSize: '50px',}}
            > 
            ☑
            </Typography>
          <Item>Step 1 - Make Your Selection</Item>
            <Typography variant="body1" align="center" 
                sx={{ fontSize: '16px', mt: 1, maxWidth: '250px', mx: 'auto', color: '#888888', background: '#f1fdd783', fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
            > 
            Ready-to-eat meal preps or Recipes
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
             <Typography variant="h6" align="center"
                sx={{ fontSize: '50px',}}
            > 
            🔎︎
            </Typography>
          <Item>Step 2 - Browse & Customize</Item>
            <Typography variant="body1" align="center" gutterBottom  
                sx={{ fontSize: '16px', mt: 1, maxWidth: '250px', mx: 'auto', color: '#888888', fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
            >
            Pick meals/recipes that suit your goals
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Typography variant="h6" align="center" 
                sx={{ fontSize: '50px',}}
            > 
            𓌉◯𓇋
            </Typography>
          <Item>Step 3 - Enjoy Your Food </Item>
            <Typography variant="body1" align="center" gutterBottom  
                sx={{ fontSize: '16px', mt: 1, maxWidth: '250px', mx: 'auto', color: '#888888', fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
            > 
            Start cooking or have your meals delivered
          </Typography>  
        </Grid>
      </Grid>
    </Box>
  );
}