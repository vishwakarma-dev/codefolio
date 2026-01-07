import { Box, Container, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { Computer } from "@mui/icons-material";
import { TimelineItem } from "@app/components/TimeLineItem";  
import Head from "next/head";

function AboutPage() {

  const guidingPrinciples = [
    { title: "Performance", icon: "⚡", desc: "Optimizing every byte for lightning fast interactions." },
    { title: "Scalability", icon: "🏗️", desc: "Architecting systems that grow with your business." },
    { title: "Security", icon: "🛡️", desc: "Implementing industry-standard IAM protocols." },
    { title: "Clean Code", icon: "✨", desc: "Writing readable, maintainable, and robust logic." }
  ];

  return (
    <>
      <Head>
        <title>
          Vaibhav Satokar : About mes
        </title>
      </Head>
      <Box sx={{ overflowX: 'hidden' }}>
        <Container maxWidth="lg" sx={{ pt: 15, pb: 10 }}>
          <Grid container spacing={8} alignItems="center" sx={{ mb: 15 }}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <Computer color="primary" fontSize="small" />
                <Typography variant="overline" sx={{ fontWeight: 900, color: 'primary.main', letterSpacing: 2 }}>The Profile</Typography>
              </Stack>
              <Typography variant="h2" sx={{ fontWeight: 900, fontFamily: 'Space Grotesk', mb: 4, lineHeight: 1.1 }}>
                Solving problems through <Box component="span" sx={{ color: 'primary.main' }}>modular</Box> architecture.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', mb: 3, lineHeight: 1.7 }}>
                I am a dedicated Application Engineer with a focus on building high-performance, scalable web solutions. My journey is anchored in the .NET ecosystem, complemented by modern frontend practices using React.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', mb: 4, lineHeight: 1.7 }}>
                I thrive on turning complex manual processes into streamlined digital experiences that bridge business logic and intuitive UI.
              </Typography>
              <Divider sx={{ mb: 4 }} />
              <Stack direction="row" spacing={6}>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 900, color: 'primary.main' }}>2+</Typography>
                  <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.disabled', textTransform: 'uppercase', letterSpacing: 1.5 }}>Years Experience</Typography>
                </Box>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 900, color: 'primary.main' }}>15+</Typography>
                  <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.disabled', textTransform: 'uppercase', letterSpacing: 1.5 }}>Systems Shipped</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box sx={{ position: 'relative' }}>
                <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'primary.main', opacity: 0.05, filter: 'blur(50px)' }} />
                <Paper elevation={0} sx={(theme)=>({ border: `1px solid ${theme.palette.divider}`, overflow: 'hidden' })}>
                  <Box 
                    component="img" 
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop" 
                    sx={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </Paper>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mb: 15, textAlign: 'center' }}>
            <Typography variant="h2" sx={{ fontWeight: 900, fontFamily: 'Space Grotesk', mb: 10 }}>
              Professional Journey
            </Typography>
            <Box sx={{ position: 'relative', pt: 4 }}>
              <TimelineItem 
                isFirst
                date="Jan 2023 - Present"
                title="Application Engineer"
                subtitle="Kh Infinite Possibilities Private Limited"
                description="Leading development of enterprise-grade solutions using .NET, React, and MSSQL. Responsible for end-to-end implementation of complex workflow management portals."
                isRight
              />
              <TimelineItem 
                date="Aug 2022 - Jan 2023"
                title="Graduate Trainee"
                subtitle="Kh Infinite Possibilities Private Limited"
                description="Gained intensive hands-on experience in full-stack engineering, collaborating with senior architects on scalable user management systems."
                isRight={false}
              />
              <TimelineItem
                date="Aug 2021 - Feb 2022"
                title="SDET Certification Program"
                subtitle="Seed Infotech, Pune"
                description="Completed structured SDET training covering Manual Testing, Core Java, Selenium WebDriver, TestNG, API Testing, SQL, and Automation Framework design."
                isRight
              />
              <TimelineItem
                date="Graduated"
                title="B.E. Mechanical"
                subtitle="Amravati University"
                description="Developed strong analytical and structural thinking skills through mechanical design and thermodynamics research, now applied to software systems."
              />
            </Box>
          </Box>

          <Box sx={{ mb: 10 }}>
            <Typography variant="h2" sx={{ textAlign: 'center', fontWeight: 900, fontFamily: 'Space Grotesk', mb: 8 }}>
              Guiding Principles
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {guidingPrinciples.map((val, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                  <Paper 
                    elevation={0}
                    sx={(theme) => ({ 
                      p: 4, 
                      height: '100%', 
                      borderRadius: '40px',
                      border: `1px solid ${theme.palette.divider}`,
                      bgcolor: 'background.paper',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                        borderColor: 'primary.main'
                      }
                    })}
                  >
                    <Typography variant="h2" sx={{ mb: 2, fontSize: '3rem' }}>{val.icon}</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 900, mb: 1.5, fontFamily: 'Space Grotesk' }}>{val.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, px: 2 }}>{val.desc}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default AboutPage;

