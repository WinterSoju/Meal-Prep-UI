import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BBMenuCards from './BBMenuCards';
import Typography from '@mui/material/Typography';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', py: 0, bgcolor: '#f1fdd783' }}>
     <Typography variant="h4" align="center" sx={{ 
        bgcolor: '#f1fdd7b5',
        pb: 4,
        fontWeight: '1000',
        fontFamily: 'Inter, sans-serif',
        fontSize: '30px',
        color: '#2f3b2f',
        }}>
        MEALS BY GOAL
      </Typography>

      <TabContext value={value}>
        <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            flexWrap: 'nowrap',
            bgcolor: '#f1fdd783',
            }}>
          <TabList 
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant='scrollable'
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{ 
              '& .MuiTabs-flexContainer': {
             
               
              },
              '& .MuiTabs-root': {
                justifyContent: {xs: 'flex-start', sm: 'center'},
                
              },
              '& .MuiTab-root': {
                color: '#8fA27A',
                fontSize: { xs: '24px', sm: '25px',},
                fontFamily: 'Inter, sans-serif',
                fontWeight: '200',
                textTransform: 'none',
                bgcolor: 'transparent',
                whiteSpace: 'nowrap',
                minWidth: 'auto',
                px: 3,
              },
              '& .MuiTab-root.Mui-selected': {
                color: '#8FA27A',
                border: '2px solid #8FA27A',
              },
              '& .MuiTabs-indicator': {
                display: 'none',
              }
            }}>
            <Tab label="💪Bodybuilding" value="1" />
            <Tab label="📉 Weight Loss" value="2" />
            <Tab label="⚖️ Maintenance" value="3" />
            <Tab label="🥑 Keto" value="4" />
            <Tab label="🥦 Vegan" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{padding: 0}}><BBMenuCards /></TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
