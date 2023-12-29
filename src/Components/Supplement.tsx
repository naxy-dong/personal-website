import { Box, Link } from "@mui/material";
import Typography from "@mui/material/Typography";

function Supplement({ label, link }: { label: string; link: string }) {
  return (
    <Box>
      <Link href={link} variant="h6">
        {label}
      </Link>
    </Box>
  );
}

export default Supplement;
