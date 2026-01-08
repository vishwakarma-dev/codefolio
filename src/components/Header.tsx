import React, { useContext, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Box,
  Container,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Divider
} from '@mui/material';
import {
  LightMode,
  DarkMode,
  Menu,
  Close,
  GitHub,
  LinkedIn,
  Download,
  Email
} from '@mui/icons-material';
import { usePathname } from 'next/navigation';
import { ColorModeContext } from '@app/providers/ColorModeProvider';
import { PortfolioDataContext } from '@app/providers/PortfolioDataProvider';
import Link from 'next/link';

const Header: React.FC = () => {
  const theme = useTheme();
  const pathname = usePathname();
  const colorMode = useContext(ColorModeContext);
  const data = useContext(PortfolioDataContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box sx={{ width: 280, height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 900, fontFamily: 'Space Grotesk' }}>
          MENU
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <Close />
        </IconButton>
      </Stack>
      <Divider />
      <List sx={{ flexGrow: 1 }}>
        {navLinks.map((link) => {
          const isActive = pathname === link.path;

          return (
            <ListItem key={link.path} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                component={Link}
                href={link.path}
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: 2,
                  bgcolor: isActive ? 'primary.main' : 'transparent',
                  color: isActive ? 'primary.contrastText' : 'text.primary',
                  '&:hover': {
                    bgcolor: isActive ? 'primary.main' : 'action.hover'
                  }
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontWeight: 800,
                    fontSize: '1.1rem'
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}

        <Divider sx={{ my: 2 }} />

        {(() => {
          const isActive = pathname === '/contact';

          return (
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href="/contact"
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: 2,
                  bgcolor: isActive ? 'primary.main' : 'transparent',
                  color: isActive ? 'primary.contrastText' : 'text.primary'
                }}
              >
                <ListItemText
                  primary="Contact"
                  primaryTypographyProps={{ fontWeight: 800 }}
                />
              </ListItemButton>
            </ListItem>
          );
        })()}
      </List>

      <Stack spacing={2} sx={{ mt: 'auto' }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<Download />}
          component="a"
          href={data?.SOCIAL_LINKS.resume}
          target="_blank"
          sx={{ fontWeight: 800, py: 1.5 }}
        >
          Download CV
        </Button>

        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton component="a" href={data?.SOCIAL_LINKS.github} target="_blank">
            <GitHub />
          </IconButton>
          <IconButton component="a" href={data?.SOCIAL_LINKS.linkedin} target="_blank">
            <LinkedIn />
          </IconButton>
          <IconButton component="a" href={`mailto:${data?.SOCIAL_LINKS.email}`}>
            <Email />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={(theme) => ({
          bgcolor:
            theme.palette.mode === 'dark'
              ? 'rgba(10,10,10,0.6)'
              : 'rgba(255,255,255,0.65)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderBottom: `1px solid ${
            theme.palette.mode === 'dark'
              ? 'rgba(255,255,255,0.08)'
              : 'rgba(0,0,0,0.08)'
          }`,
          color: 'text.primary',
          zIndex: theme.zIndex.appBar
        })}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ height: 60, justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box
              component={Link}
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  borderRadius: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 900,
                  boxShadow: '0 4px 10px rgba(99, 102, 241, 0.3)'
                }}
              >
                VS
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 900,
                  letterSpacing: -0.5,
                  fontFamily: 'Space Grotesk'
                }}
              >
                VAIBHAV SATOKAR
              </Typography>
            </Box>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 1, justifyContent:"space-between" }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.path;

                return (
                  <Button
                    key={link.path}
                    component={Link}
                    href={link.path}
                    sx={{
                      px: 2,
                      fontWeight: 700,
                      color: isActive ? 'primary.main' : 'text.secondary',
                      position: 'relative',
                      '&::after': isActive
                        ? {
                            content: '""',
                            position: 'absolute',
                            bottom: 4,
                            left: '20%',
                            right: '20%',
                            height: 2,
                            bgcolor: 'primary.main',
                            borderRadius: 1
                          }
                        : {}
                    }}
                  >
                    {link.label}
                  </Button>
                );
              })}

              <Box
                sx={{
                  ml: 2,
                  pl: 2,
                  borderLeft: `1px solid ${theme.palette.divider}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <Button
                  size="small"
                  component={Link}
                  href="/contact"
                  variant={pathname === '/contact' ? 'contained' : 'outlined'}
                  sx={{ px: 2, fontWeight: 800 }}
                >
                  Contact
                </Button>
                <Tooltip title="Toggle Theme">
                    <IconButton size='small' onClick={colorMode.toggleColorMode}>
                      {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
                    </IconButton>
                </Tooltip>
              </Box>
            </Box>

            {/* Mobile */}
            <Box sx={{ display: { xs: 'flex', lg: 'none' }, alignItems: 'center', gap: 1 }}>
              <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
              </IconButton>
              <IconButton onClick={handleDrawerToggle}>
                <Menu />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            opacity : "inherit",
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
