import DashLayout from "core/layouts/dashLayout/dash.layout";
import { RouteObject } from "react-router-dom";
import React from "react";

const NotFoundPage = React.lazy(
  () => import("core/pages/notFound/notFound.page")
);

const FormExample = React.lazy(() => import("modules/examples/form/form.page"));
const HeadingExample = React.lazy(
  () => import("modules/examples/heading/heading.page")
);
const PaletteExample = React.lazy(
  () => import("modules/examples/palette/palette.page")
);
const ButtonExample = React.lazy(
  () => import("modules/examples/button/button.page")
);

export const exampleRoutes: RouteObject[] = [
  {
    path: "/examples",
    element: <DashLayout />,
    children: [
      { path: "form", element: <FormExample /> },
      { path: "heading", element: <HeadingExample /> },
      { path: "palette", element: <PaletteExample /> },
      { path: "button", element: <ButtonExample /> },
      { path: "list", element: <NotFoundPage /> },
      { path: "table", element: <NotFoundPage /> },
    ],
  },
];
