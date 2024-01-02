import { Box, Link } from "@mui/material";

function Supplement({ label, link }: { label: string; link: string }) {
  return (
    <Box sx={{ textAlign: "left" }}>
      <Link target="_blank" href={link} variant="subtitle1">
        {label}
      </Link>
    </Box>
  );
}

export default Supplement;
