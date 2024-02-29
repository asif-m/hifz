import { Chip } from "@suid/material";
import { useNavigate } from "@solidjs/router";

export function StylizedChip(props: { label: number | string; path?: string }) {
  const { label, path } = props;
  const navigate = useNavigate();
  return (
    <Chip
      style={{ margin: "2px", "font-size": "10px", height: "20px" }}
      label={label}
      onClick={() => {
        if (path) {
          navigate(path, { replace: true });
          setTimeout(function () {
            location.reload();
          }, 100);
        }
      }}
    />
  );
}
