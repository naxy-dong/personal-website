Unused code that might come in handly later

NavBar.js
```js
          <StyledLink to="/">
            <Typography
              variant="h6"
              // noWrap
              // component="div"
              // sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Home
            </Typography>
          </StyledLink>
          
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
```

# Toggle between LightMode to DarkMode 
https://mui.com/material-ui/customization/dark-mode/
```js
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
```

# Custome Timeline stuff
```tsx
<Timeline
  position="alternate"
  sx={{
    '& .MuiTimelineItem-root': { minHeight: 90 },
    '& .MuiTimelineOppositeContent-root': { mt: 0.5 },
    '& .MuiTimelineDot-root': {
      borderRadius: 1.25,
      boxShadow: 'none',
      margin: 0,
      ml: 1.25,
      mr: 1.25,
      p: 1,
      '& .MuiSvgIcon-root': { fontSize: '1.2rem' }
    },
    '& .MuiTimelineContent-root': { borderRadius: 1, bgcolor: 'secondary.lighter', height: '100%' },
    '& .MuiTimelineConnector-root': { border: '1px dashed', borderColor: 'secondary.light', bgcolor: 'transparent' }
  }}
>
  <TimelineItem>
    <TimelineOppositeContent align="right" variant="body2" color="text.secondary">
      9:30 am
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot sx={{ color: 'primary.main', bgcolor: 'primary.lighter' }}>
        <CoffeeOutlined style={{ fontSize: '1.3rem' }} />
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h6" component="span">
        Eat
      </Typography>
      <Typography color="textSecondary">Because you need strength</Typography>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineOppositeContent variant="body2" color="text.secondary">
      10:00 am
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot sx={{ color: 'success.main', bgcolor: 'success.lighter' }}>
        <DesktopOutlined style={{ fontSize: '1.3rem' }} />
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h6" component="span">
        Code
      </Typography>
      <Typography color="textSecondary">Because it&apos;s awesome!</Typography>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineOppositeContent align="right" variant="body2" color="text.secondary">
      11:30 am
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot sx={{ color: 'warning.main', bgcolor: 'warning.lighter' }}>
        <GiftOutlined style={{ fontSize: '1.3rem' }} />
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h6" component="span">
        Gift
      </Typography>
      <Typography color="textSecondary">Because you need.</Typography>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineOppositeContent align="right" variant="body2" color="text.secondary">
      12:30 am
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot sx={{ color: 'error.main', bgcolor: 'error.lighter' }}>
        <RetweetOutlined style={{ fontSize: '1.3rem' }} />
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h6" component="span">
        Repeat
      </Typography>
      <Typography color="textSecondary">This is the life you love!</Typography>
    </TimelineContent>
  </TimelineItem>
</Timeline>
```

```js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faCuttlefish } from "@fortawesome/free-brands-svg-icons";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
const iconStyle = { width: "25px", height: "25px" };
```