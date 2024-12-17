import * as React from "react";
import * as ReactDom from "react-dom";
import * as strings from "AudioLogWebPartStrings";
import {
  PropertyPaneTextField,
  type IPropertyPaneConfiguration,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import AudioLog from "./components/AudioLog";
import { IAudioLogProps } from "./components/IAudioLogProps";

export interface IAudioLogWebPartProps {
  description: string;
  spListLink: string;
  absoluteUrl: string;
}

export default class AudioLogWebPart extends BaseClientSideWebPart<IAudioLogWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IAudioLogProps> = React.createElement(
      AudioLog,
      {
        userDisplayName: this.context.pageContext.user.displayName,
        spListLink: this.properties.spListLink,
        absoluteUrl: this.context.pageContext.web.absoluteUrl,
        spHttpClient: this.context.spHttpClient,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Audio Log Web Part",
          },
          groups: [
            {
              groupFields: [
                PropertyPaneTextField("spListLink", {
                  label: strings.SPListLinkLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
