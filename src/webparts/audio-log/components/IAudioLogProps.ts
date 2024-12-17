import { SPHttpClient } from "@microsoft/sp-http";

export interface IAudioLogProps {
  userDisplayName: string;
  spListLink: string;
  absoluteUrl: string;
  spHttpClient: SPHttpClient;
}
