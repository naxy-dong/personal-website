import { Box, Link } from "@mui/material";
import Typography from "@mui/material/Typography";

function Supplement({ label, link }: { label: string; link: string }) {
  return (
    <Box sx={{ textAlign: "left" }}>
      <Link href={link} variant="subtitle1">
        {label}
      </Link>
    </Box>
  );
}

export default Supplement;
