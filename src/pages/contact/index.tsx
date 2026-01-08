import { useContext } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  Avatar,
  TextField,
  Button,
  Link,
  Tooltip,
  IconButton,
  Theme
} from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { PortfolioDataContext } from "@app/providers/PortfolioDataProvider";
import Head from "next/head";


function ContactsPage() {
  const data = useContext(PortfolioDataContext);
  if (!data) return null;

  const { email, linkedin, github } = data.SOCIAL_LINKS;

  return (
    <>
      <Head>
        <title>Vaibhav Satokar : Contact Me</title>
      </Head>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg" sx={{ pt: 10 }}>
          <Paper
            elevation={0}
            sx={(theme) => ({
              p: { xs: 4, md: 8 },
              border: `1px solid ${theme.palette.divider}`,
              bgcolor: "background.paper",
            })}
          >
            <Grid container spacing={8}>
              {/* LEFT : PROFILE LINKS */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    mb: 3,
                    fontFamily: "Space Grotesk"
                  }}
                >
                  Let’s <Box component="span" sx={{ color: "primary.main" }}>connect</Box>.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    fontSize: "1.1rem",
                    mb: 6
                  }}
                >
                  Prefer direct links? You can reach me instantly through any of the
                  profiles below.
                </Typography>

                <Stack direction="row" spacing={3}>
                  {/* EMAIL */}
                  <Tooltip title="Email me" arrow>
                    <IconButton
                      component="a"
                      href={`mailto:${data.SOCIAL_LINKS.email}`}
                      sx={{
                        bgcolor: "rgba(99,102,241,0.1)",
                        color: "primary.main",
                        width: 56,
                        height: 56,
                        "&:hover": {
                          bgcolor: "primary.main",
                          color: "primary.contrastText"
                        }
                      }}
                    >
                      <Email fontSize="large" />
                    </IconButton>
                  </Tooltip>

                  {/* LINKEDIN */}
                  <Tooltip title="LinkedIn profile" arrow>
                    <IconButton
                      component="a"
                      href={data.SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        bgcolor: "rgba(99,102,241,0.1)",
                        color: "primary.main",
                        width: 56,
                        height: 56,
                        "&:hover": {
                          bgcolor: "primary.main",
                          color: "primary.contrastText"
                        }
                      }}
                    >
                      <LinkedIn fontSize="large" />
                    </IconButton>
                  </Tooltip>

                  {/* GITHUB */}
                  <Tooltip title="GitHub profile" arrow>
                    <IconButton
                      component="a"
                      href={data.SOCIAL_LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        bgcolor: "rgba(99,102,241,0.1)",
                        color: "primary.main",
                        width: 56,
                        height: 56,
                        "&:hover": {
                          bgcolor: "primary.main",
                          color: "primary.contrastText"
                        }
                      }}
                    >
                      <GitHub fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Grid>

              {/* RIGHT : CONTACT FORM */}
              <Grid size={{ xs: 12, md: 7 }}>
                <Box
                  sx={(theme) => ({
                    p: { xs: 3, md: 5 },
                    background:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))"
                        : "linear-gradient(180deg, rgba(0,0,0,0.03), rgba(0,0,0,0.01))",
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${theme.palette.divider}`
                  })}
                >
                  <Stack spacing={2} component="form">
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 900, fontFamily: "Space Grotesk" }}
                    >
                      Send a message
                    </Typography>

                    <TextField
                      fullWidth
                      label="Full Name"
                      placeholder="John Doe"
                      variant="outlined"
                      slotProps={{
                        input : {
                          sx: {
                            bgcolor: "background.paper"
                          }
                        }
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Email Address"
                      placeholder="john@example.com"
                      variant="outlined"
                      slotProps={{
                        input : {
                          sx: {
                            bgcolor: "background.paper"
                          }
                        }
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Subject"
                      placeholder="Let’s work together"
                      slotProps={{
                        input : {
                          sx: {
                            bgcolor: "background.paper"
                          }
                        }
                      }}
                    />

                    <TextField
                      fullWidth
                      multiline
                      rows={8}
                      label="Your Message"
                      placeholder="Tell me about your idea, timeline, or challenge…"
                      slotProps={{
                        input : {
                          sx: {
                            bgcolor: "background.paper"
                          }
                        }
                      }}
                    />

                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        mt: 2,
                        py: 1.8,
                        fontWeight: 900,
                        textTransform: "none",
                        fontSize: "1rem",
                        boxShadow: "0 12px 30px rgba(99,102,241,0.35)",
                        "&:hover": {
                          boxShadow: "0 16px 40px rgba(99,102,241,0.45)"
                        }
                      }}
                    >
                      Send Message →
                    </Button>
                  </Stack>
                </Box>
              </Grid>

            </Grid>
          </Paper>
        </Container>
      </Box>

    </>
  );
}

export default ContactsPage;
