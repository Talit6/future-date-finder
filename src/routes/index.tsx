import { createFileRoute } from "@tanstack/react-router";
import { BioSite } from "../components/BioSite";

export const Route = createFileRoute("/")({
  component: BioSite,
});
