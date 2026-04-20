import { PageHero } from "@app/components/ui/PageHero";
import { PortfolioDataContext } from "@app/providers/PortfolioDataProvider";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { useContext } from "react";

import { SinglePageSection } from "./SinglePageSection";

type QuickAction = {
  key: string;
  label: string;
  href: string;
  icon: typeof Email;
  external?: boolean;
};

export const ContactSection = () => {
  const data = useContext(PortfolioDataContext);
  if (!data) return null;

  const quickActions: QuickAction[] = [
    {
      key: "email",
      label: "Email",
      href: `mailto:${data.SOCIAL_LINKS.email}`,
      icon: Email,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      href: data.SOCIAL_LINKS.linkedin,
      icon: LinkedIn,
      external: true,
    },
    {
      key: "github",
      label: "GitHub",
      href: data.SOCIAL_LINKS.github,
      icon: GitHub,
      external: true,
    },
  ];

  return (
    <SinglePageSection id="contact" sx={{ paddingY: { xs: 4, md: 12 }, marginY: { xs:2, md :12} }}>
      <Container maxWidth="lg"  sx={{ pt: { xs: 2, md: 3 } }}>
        <Paper sx={{ p: { xs: 2.2, md: 3.2 }, width: "100%" }}>
          <Grid container spacing={{ xs: 2.2, md: 3 }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <PageHero
                label="Get In Touch"
                title="Let's"
                highlight="Connect"
                description="Open to collaborating on scalable web products, platform improvements, and engineering modernization initiatives."
                sx={{ mb: 2.4 }}
              />

              <Stack direction="row" spacing={1.4}>
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Tooltip key={action.key} title={action.label} arrow>
                      <IconButton
                        component="a"
                        href={action.href}
                        target={action.external ? "_blank" : undefined}
                        rel={
                          action.external ? "noopener noreferrer" : undefined
                        }
                        sx={{
                          width: 48,
                          height: 48,
                          border: 1,
                          borderColor: "divider",
                          bgcolor: "action.hover",
                          color: "primary.main",
                          "&:hover": {
                            bgcolor: "primary.main",
                            color: "primary.contrastText",
                          },
                        }}
                      >
                        <Icon />
                      </IconButton>
                    </Tooltip>
                  );
                })}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  p: { xs: 1.8, md: 2.2 },
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 1,
                  bgcolor: "background.paper",
                }}
              >
                <Stack spacing={1.4} component="form">
                  <TextField
                    fullWidth
                    label="Full Name"
                    placeholder="John Doe"
                  />
                  <TextField
                    fullWidth
                    label="Email Address"
                    placeholder="john@example.com"
                    type="email"
                  />
                  <TextField
                    fullWidth
                    label="Subject"
                    placeholder="Project discussion"
                  />
                  <TextField
                    fullWidth
                    multiline
                    minRows={4}
                    label="Your Message"
                    placeholder="Tell me about your idea, timeline, or challenge..."
                  />

                  <Button
                    variant="contained"
                    size="medium"
                    sx={{ mt: 0.8, py: 1 }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </SinglePageSection>
  );
};
