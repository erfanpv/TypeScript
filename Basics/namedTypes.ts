//Named Types
type StatusType = "pending" | "completed" | "failed";

let currentStatus: StatusType = "completed";

type ToggleSwitch = "on" | "of" | "";

let toggleButton: ToggleSwitch = "";

if (true) {
  toggleButton = "on";
} else {
  toggleButton = "of";
}
