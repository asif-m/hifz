import { Chip } from "@suid/material";
import { useNavigate } from "@solidjs/router";
import { navigateToUrlAndReload } from "~/utils/navigation";

export function StylizedChip(props: { label: number | string; path?: string }) {
  const { label, path } = props;
  const navigate = useNavigate();
  return (
    <Chip
      style={{ margin: "2px", "font-size": "10px", height: "20px" }}
      label={label}
      onClick={() => {
        if (path) {
          navigateToUrlAndReload(navigate, path);
        }
      }}
    />
  );
}
