import { Button } from "@mui/material";

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="app-footer__name">ⓒ IT-FAMCS 2024</div>
      <Button
        className="CreatorButton"
        href="/creators"
        variant="outlined"
        sx={{ color: "white", borderColor: "white" }}
      >
        О создателях
      </Button>
    </footer>
  );
}
