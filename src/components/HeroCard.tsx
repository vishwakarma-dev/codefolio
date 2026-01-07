import { ArrowForward, Info } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

                  



export const Hero: React.FC = () => {
    const theme = useTheme();
    return (
      <Box sx={{ position: 'relative', pt: { xs: 15, md: 25 }, pb: { xs: 10, md: 15 }, overflow: 'hidden' }}>
        <Box className="blob blob-1" />
        <Box className="blob blob-2" />
        <Box className="blob blob-3" />
  
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Box 
            sx={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: 1.5, 
              px: 2.5, 
              py: 1, 
              bgcolor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 50,
              mb: 4
            }}
          >
            <Box 
              sx={{ 
                width: 8, height: 8, bgcolor: '#22c55e', borderRadius: '50%',
                boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)'
              }} 
            />
            <Typography variant="overline" sx={{ fontWeight: 900, color: 'primary.main', letterSpacing: 2 }}>
              Open for new opportunities
            </Typography>
          </Box>
          
          <Box sx={{ mb: 3 }}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '3.5rem', md: '7rem' }, 
                fontWeight: 900, 
                fontFamily: 'Space Grotesk',
                letterSpacing: -2,
                lineHeight: 1,
                mb: 1
              }}
            >
              VAIBHAV
            </Typography>
            <Typography 
              variant="h1" 
              className="shimmer-text"
              sx={{ 
                fontSize: { xs: '3.5rem', md: '7rem' }, 
                fontWeight: 900, 
                fontFamily: 'Space Grotesk',
                letterSpacing: -2,
                lineHeight: 1
              }}
            >
              SATOKAR
            </Typography>
          </Box>
  
          <Stack direction="column" alignItems="center" spacing={2} sx={{ mb: 4 }}>
            <Box sx={{ width: 100, height: 2, background: 'linear-gradient(90deg, transparent, #6366f1, transparent)' }} />
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700, 
                fontFamily: 'Space Grotesk', 
                color: 'primary.main', 
                textTransform: 'uppercase', 
                letterSpacing: 4 
              }}
            >
              Application Engineer
            </Typography>
          </Stack>
  
          <Typography 
            variant="h6" 
            sx={{ 
              maxWidth: 700, mx: 'auto', mb: 6, 
              color: 'text.secondary', fontWeight: 500, lineHeight: 1.6 
            }}
          >
            Crafting high-quality, scalable web applications with expertise in .NET, React, and modern database systems. Turning complex challenges into elegant digital solutions.
          </Typography>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              component={Link}   
              href="/projects" 
              variant="contained" 
              size="large"
              endIcon={<ArrowForward />}
              sx={{ px: 4, py: 2, fontSize: '1.1rem', fontWeight: 700 }}
            >
              View Projects
            </Button>
            <Button 
              component={'a'} 
              href="/about" 
              variant="outlined" 
              size="large"
              startIcon={<Info />}
              sx={{ px: 4, py: 2, fontSize: '1.1rem', fontWeight: 700 }}
            >
              Learn More
            </Button>
          </Stack>
        </Container>
      </Box>
    );
  };