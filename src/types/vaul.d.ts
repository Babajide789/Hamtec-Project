declare module "vaul" {
  import * as React from "react";

  export namespace Drawer {
    const Root: React.FC<React.ComponentProps<"div">>;
    const Trigger: React.FC<React.ComponentProps<"button">>;
    const Portal: React.FC<React.ComponentProps<"div">>;
    const Overlay: React.FC<React.ComponentProps<"div">>;
    const Content: React.FC<React.ComponentProps<"div">>;
    const Close: React.FC<React.ComponentProps<"button">>;
    const Title: React.FC<React.ComponentProps<"h2">>;
    const Description: React.FC<React.ComponentProps<"p">>;
  }
}
